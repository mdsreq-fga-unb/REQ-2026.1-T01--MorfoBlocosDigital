import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/image.png';

type Props = { size?: 'sm' | 'md' | 'lg' | 'cover' };

export function Logo({ size = 'md' }: Props) {
  if (size === 'cover') {
    return (
      <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
        <ImageWithFallback 
          src={logoImg} 
          alt="Capa Morfoblocos Digital" 
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  const dims = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
  }[size];

  return (
    <div className={`${dims} overflow-hidden rounded-xl shadow-lg shrink-0`}>
      <ImageWithFallback 
        src={logoImg} 
        alt="Morfoblocos Digital Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
