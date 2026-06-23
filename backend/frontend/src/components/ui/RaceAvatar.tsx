interface RaceAvatarProps {
  name: string;
  size?: 'sm' | 'lg';
  className?: string;
}

// Avatar 100% próprio (gerado por código): gradiente por raça + inicial em serifa.
// Sem nenhuma imagem de terceiros — zero risco de direitos autorais.
const PALETTE: Record<string, [string, string]> = {
  'Humano': ['#a16207', '#713f12'],
  'Alto Elfo': ['#15803d', '#14532d'],
  'Elfo da Floresta': ['#4d7c0f', '#1a2e05'],
  'Elfo Sombrio': ['#6d28d9', '#2e1065'],
  'Anão da Colina': ['#b45309', '#7c2d12'],
  'Anão da Montanha': ['#a8a29e', '#44403c'],
  'Halfling Pés-Leves': ['#ca8a04', '#854d0e'],
  'Halfling Robusto': ['#d97706', '#92400e'],
  'Meio-Orc': ['#4d7c0f', '#365314'],
  'Tiefling': ['#b91c1c', '#450a0a'],
  'Gnomo das Rochas': ['#0891b2', '#164e63'],
  'Gnomo da Floresta': ['#0d9488', '#134e4a'],
  'Meio-Elfo': ['#0e7490', '#155e75'],
  'Draconato': ['#b45309', '#7f1d1d'],
};

export function RaceAvatar({ name, size = 'lg', className = '' }: RaceAvatarProps) {
  const [c1, c2] = PALETTE[name] || ['#57534e', '#292524'];
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
      style={{ background: `linear-gradient(145deg, ${c1}, ${c2})` }}
    >
      <span className={`font-serif font-bold text-white/90 text-shadow ${size === 'lg' ? 'text-4xl' : 'text-xl'}`}>
        {initial}
      </span>
    </div>
  );
}
