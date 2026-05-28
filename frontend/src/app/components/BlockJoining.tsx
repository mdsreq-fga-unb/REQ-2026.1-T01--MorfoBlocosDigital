import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, RotateCcw, Check } from 'lucide-react';

type Block = { id: string; text: string; type: 'prefix' | 'root' | 'suffix'; color: string };

const availableBlocks: Block[] = [
  { id: '1', text: 'in', type: 'prefix', color: 'bg-red-500' },
  { id: '2', text: 'des', type: 'prefix', color: 'bg-red-500' },
  { id: '3', text: 're', type: 'prefix', color: 'bg-red-500' },
  { id: '4', text: 'feliz', type: 'root', color: 'bg-blue-600' },
  { id: '5', text: 'leal', type: 'root', color: 'bg-blue-600' },
  { id: '6', text: 'fazer', type: 'root', color: 'bg-blue-600' },
  { id: '7', text: 'amor', type: 'root', color: 'bg-blue-600' },
  { id: '8', text: 'mente', type: 'suffix', color: 'bg-yellow-500' },
  { id: '9', text: 'inho', type: 'suffix', color: 'bg-yellow-500' },
  { id: '10', text: 'oso', type: 'suffix', color: 'bg-yellow-500' },
];

const validWords = ['infeliz', 'desleal', 'refazer', 'amorinho', 'felizmente', 'amoroso', 'infelizmente'];

type DragSource = { kind: 'palette'; block: Block } | { kind: 'assembled'; idx: number; block: Block };

export function BlockJoining() {
  const [assembled, setAssembled] = useState<Block[]>([]);
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);
  const [drag, setDrag] = useState<{ source: DragSource; x: number; y: number } | null>(null);
  const [hoverZone, setHoverZone] = useState<'assembly' | 'palette' | null>(null);

  const assemblyRef = useRef<HTMLDivElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<number | null>(null);

  const handleAddBlock = (block: Block) => {
    setAssembled((a) => [...a, block]);
    setFeedback(null);
  };
  const handleRemoveBlock = (idx: number) => {
    setAssembled((a) => a.filter((_, i) => i !== idx));
    setFeedback(null);
  };
  const handleReset = () => { setAssembled([]); setFeedback(null); };
  const handleCheck = () => {
    const word = assembled.map((b) => b.text).join('').toLowerCase();
    setFeedback(validWords.includes(word) ? 'success' : 'error');
  };

  const dragStartPos = useRef<{ x: number; y: number } | null>(null);
  const didMoveRef = useRef(false);

  const startDrag = (source: DragSource, e: React.PointerEvent) => {
    e.preventDefault();
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    didMoveRef.current = false;
    setDrag({ source, x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!drag) return;

    const getZone = (x: number, y: number): 'assembly' | 'palette' | null => {
      const a = assemblyRef.current?.getBoundingClientRect();
      const p = paletteRef.current?.getBoundingClientRect();
      if (a && x >= a.left && x <= a.right && y >= a.top && y <= a.bottom) return 'assembly';
      if (p && x >= p.left && x <= p.right && y >= p.top && y <= p.bottom) return 'palette';
      return null;
    };

    const autoScroll = (y: number) => {
      const edge = 80;
      const speed = 14;
      if (scrollTimer.current) {
        cancelAnimationFrame(scrollTimer.current);
        scrollTimer.current = null;
      }
      const tick = () => {
        if (y < edge) window.scrollBy(0, -speed);
        else if (y > window.innerHeight - edge) window.scrollBy(0, speed);
        scrollTimer.current = requestAnimationFrame(tick);
      };
      if (y < edge || y > window.innerHeight - edge) {
        scrollTimer.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const s = dragStartPos.current;
      if (s && Math.hypot(e.clientX - s.x, e.clientY - s.y) > 5) {
        didMoveRef.current = true;
      }
      setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d));
      setHoverZone(getZone(e.clientX, e.clientY));
      autoScroll(e.clientY);
    };

    const onUp = (e: PointerEvent) => {
      const zone = getZone(e.clientX, e.clientY);
      if (drag) {
        if (didMoveRef.current) {
          if (zone === 'assembly' && drag.source.kind === 'palette') {
            handleAddBlock(drag.source.block);
          } else if (zone === 'palette' && drag.source.kind === 'assembled') {
            handleRemoveBlock(drag.source.idx);
          }
        } else {
          if (drag.source.kind === 'palette') handleAddBlock(drag.source.block);
          else handleRemoveBlock(drag.source.idx);
        }
      }
      setDrag(null);
      setHoverZone(null);
      dragStartPos.current = null;
      didMoveRef.current = false;
      if (scrollTimer.current) {
        cancelAnimationFrame(scrollTimer.current);
        scrollTimer.current = null;
      }
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      if (scrollTimer.current) cancelAnimationFrame(scrollTimer.current);
    };
  }, [drag?.source]);

  const currentWord = assembled.map((b) => b.text).join('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-3 sm:p-4" style={{ touchAction: drag ? 'none' : 'auto' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <Link to="/aluno/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Voltar</span>
          </Link>
          <h1 className="text-xl sm:text-2xl text-center">Junção de Blocos</h1>
          <div className="w-10 sm:w-20" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-4 sm:mb-6">
          <p className="text-center text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Combine blocos de prefixo, radical e sufixo para formar palavras válidas!
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded" /> Prefixo</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-600 rounded" /> Radical</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-500 rounded" /> Sufixo</div>
          </div>

          <div
            ref={assemblyRef}
            className={`min-h-32 border-4 border-dashed rounded-2xl p-4 sm:p-6 mb-4 transition-colors ${
              hoverZone === 'assembly' ? 'border-primary bg-blue-50' : 'border-border bg-gray-50'
            }`}
          >
            {assembled.length === 0 ? (
              <div className="text-center text-muted-foreground py-6 sm:py-8 text-sm sm:text-base">
                Clique ou arraste os blocos para cá
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {assembled.map((block, idx) => (
                  <button
                    key={`${block.id}-${idx}`}
                    onPointerDown={(e) => startDrag({ kind: 'assembled', idx, block }, e)}
                    className={`${block.color} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-lg sm:text-xl shadow-lg hover:scale-105 transition-transform select-none touch-none cursor-grab active:cursor-grabbing`}
                  >
                    {block.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {currentWord && (
            <div className="text-center mb-4">
              <span className="text-muted-foreground text-sm sm:text-base">Palavra formada: </span>
              <span className="text-xl sm:text-2xl">{currentWord}</span>
            </div>
          )}

          {feedback === 'success' && (
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-xl mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-6 h-6 text-green-600" />
                <div>
                  <div>Palavra válida!</div>
                  <div className="text-sm text-muted-foreground">Excelente! Você formou "{currentWord}".</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <div className="text-xs text-muted-foreground mb-2">Formação morfológica:</div>
                <div className="flex flex-wrap items-center gap-2">
                  {assembled.map((b, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className={`${b.color} text-white px-3 py-1 rounded-md text-sm`}>{b.text}</span>
                      <span className="text-xs text-muted-foreground">
                        ({b.type === 'prefix' ? 'prefixo' : b.type === 'root' ? 'radical' : 'sufixo'})
                      </span>
                      {i < assembled.length - 1 && <span className="text-muted-foreground">+</span>}
                    </span>
                  ))}
                  <span className="text-muted-foreground">=</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">{currentWord}</span>
                </div>
              </div>
            </div>
          )}
          {feedback === 'error' && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-xl mb-4">
              <div>Palavra não reconhecida</div>
              <div className="text-sm text-muted-foreground">Tente outra combinação!</div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReset}
              className="flex-1 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" /> Limpar
            </button>
            <button
              onClick={handleCheck}
              disabled={assembled.length === 0}
              className="flex-1 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              Verificar Palavra
            </button>
          </div>
        </div>

        <div
          ref={paletteRef}
          className={`bg-white rounded-2xl shadow-xl p-4 sm:p-6 transition-colors ${
            hoverZone === 'palette' ? 'ring-2 ring-primary' : ''
          }`}
        >
          <h3 className="mb-4">Blocos Disponíveis</h3>
          <div className="space-y-4">
            {(['prefix', 'root', 'suffix'] as const).map((type) => (
              <div key={type}>
                <div className="text-sm text-muted-foreground mb-2 capitalize">
                  {type === 'prefix' ? 'Prefixos' : type === 'root' ? 'Radicais' : 'Sufixos'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableBlocks.filter((b) => b.type === type).map((block) => (
                    <button
                      key={block.id}
                      onPointerDown={(e) => startDrag({ kind: 'palette', block }, e)}
                      className={`${block.color} text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow hover:scale-105 transition-transform select-none touch-none cursor-grab active:cursor-grabbing`}
                    >
                      {block.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {drag && (
        <div
          className={`${drag.source.block.color} text-white px-6 py-4 rounded-xl text-xl shadow-2xl pointer-events-none fixed z-50 opacity-90`}
          style={{ left: drag.x, top: drag.y, transform: 'translate(-50%, -50%)' }}
        >
          {drag.source.block.text}
        </div>
      )}
    </div>
  );
}
