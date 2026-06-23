import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, User, Eye, EyeOff, GraduationCap, Loader2 } from 'lucide-react';
import { Logo } from './Logo';
import { api } from '../../lib/api';

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'aluno' | 'professor'>('aluno');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // O backend espera {email, username, password, tipo}. O "Nome Completo"
      // do formulário é usado como username.
      await api.post('/auth/registro/', {
        email,
        username: name,
        password,
        tipo: userType,
      });
      // Sucesso: manda para o login para o usuário entrar com a conta nova.
      navigate('/login');
    } catch (err: unknown) {
      console.error('Falha no cadastro:', err);
      // O DRF retorna 400 com erros por campo: { email: [...], username: [...] }.
      const data =
        typeof err === 'object' && err !== null && 'response' in err
          ? (err as { response?: { data?: Record<string, unknown> } }).response?.data
          : undefined;
      if (data?.email) {
        setError('Este email já está cadastrado.');
      } else if (data?.username) {
        setError('Este nome já está em uso. Tente outro.');
      } else if (data?.password) {
        setError('A senha precisa ter pelo menos 6 caracteres.');
      } else {
        setError('Não foi possível criar a conta. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center mb-4 sm:mb-6"><Logo size="cover" /></div>
            <h1 className="text-2xl sm:text-3xl mb-2">Criar Conta</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Junte-se ao Morfoblocos Digital</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 sm:mb-3 text-sm sm:text-base">Tipo de Conta</label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('aluno')}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    userType === 'aluno'
                      ? 'border-primary bg-blue-50'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <User className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-primary" />
                  <div className="text-xs sm:text-sm">Aluno</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('professor')}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    userType === 'professor'
                      ? 'border-primary bg-blue-50'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-primary" />
                  <div className="text-xs sm:text-sm">Professor</div>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Criando conta...' : 'Criar Conta'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Já tem uma conta? </span>
            <Link to="/login" className="text-primary hover:underline">
              Entre aqui
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
