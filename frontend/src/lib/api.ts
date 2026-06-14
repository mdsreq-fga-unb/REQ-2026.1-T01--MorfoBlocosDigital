import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

// Chaves usadas no localStorage. Centralizadas aqui para que AppState e
// qualquer outro consumidor usem exatamente os mesmos nomes.
export const STORAGE_KEYS = {
  access: 'mb_access',
  refresh: 'mb_refresh',
  usuario: 'mb_usuario',
} as const;

// Lê a baseURL da env do Vite (frontend/.env -> VITE_API_URL).
const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api';

export const api = axios.create({ baseURL });

// --- Helpers de token -------------------------------------------------------

export function getAccessToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.access);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.refresh);
}

export function setTokens(access: string, refresh?: string) {
  localStorage.setItem(STORAGE_KEYS.access, access);
  if (refresh) localStorage.setItem(STORAGE_KEYS.refresh, refresh);
}

export function clearAuth() {
  localStorage.removeItem(STORAGE_KEYS.access);
  localStorage.removeItem(STORAGE_KEYS.refresh);
  localStorage.removeItem(STORAGE_KEYS.usuario);
}

// Evento disparado quando a sessão expira de vez (refresh falhou).
// AppState/App vão ouvir isso para deslogar e mandar o usuário ao /login.
export const AUTH_EXPIRED_EVENT = 'mb:auth-expired';

function notifyAuthExpired() {
  clearAuth();
  window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
}

// --- Interceptor de request: anexa o Bearer token --------------------------

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --- Interceptor de response: trata 401 com refresh automático -------------

// Cliente axios "cru" (sem interceptors) para chamar o refresh sem cair em
// recursão infinita caso o próprio refresh retorne 401.
const rawAxios = axios.create({ baseURL });

// Marca para não tentar refazer o refresh mais de uma vez por request.
type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config as RetriableConfig | undefined;
    const status = error.response?.status;

    // Só tentamos refresh em 401, uma única vez, e nunca para o próprio
    // endpoint de token (evita loop quando email/senha estão errados).
    const isAuthEndpoint = original?.url?.includes('/token/');

    if (status === 401 && original && !original._retry && !isAuthEndpoint) {
      original._retry = true;
      const refresh = getRefreshToken();

      if (!refresh) {
        notifyAuthExpired();
        return Promise.reject(error);
      }

      try {
        const { data } = await rawAxios.post('/token/refresh/', { refresh });
        setTokens(data.access);
        original.headers.Authorization = `Bearer ${data.access}`;
        return api(original); // refaz a request original com o token novo
      } catch (refreshError) {
        notifyAuthExpired();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
