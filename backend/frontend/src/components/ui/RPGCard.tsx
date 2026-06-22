import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface RPGCardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'magic' | 'danger';
  icon?: React.ReactNode;
  action?: React.ReactNode;
  info?: string;
}

export function RPGCard({
  title,
  className = '',
  children,
  variant = 'default',
  icon,
  action,
  info,
}: RPGCardProps) {
  const [showInfo, setShowInfo] = useState(false);

  const borderColors = {
    default: 'border-stone-700 hover:border-amber-600/50',
    magic: 'border-indigo-800 hover:border-indigo-500/50',
    danger: 'border-red-900 hover:border-red-700/50',
  };

  const headerColors = {
    default: 'bg-stone-900/80 border-b border-stone-800',
    magic: 'bg-indigo-950/50 border-b border-indigo-900/50',
    danger: 'bg-red-950/30 border-b border-red-900/30',
  };

  return (
    <div className={`relative bg-gray-900/90 border-2 ${borderColors[variant]} rounded-lg shadow-xl overflow-visible transition-colors duration-300 group ${className}`}>
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-600/60 rounded-tl-sm z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-600/60 rounded-tr-sm z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-amber-600/60 rounded-bl-sm z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-600/60 rounded-br-sm z-10 pointer-events-none" />

      {title && (
        <div className={`px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between ${headerColors[variant]}`}>
          <div className="flex items-center gap-2 min-w-0">
            {icon && <span className="text-amber-500 flex-shrink-0">{icon}</span>}
            <h3 className="font-serif font-bold text-base sm:text-lg text-amber-500 tracking-wide uppercase text-shadow-sm truncate">
              {title}
            </h3>

            {info && (
              <button
                type="button"
                onClick={() => setShowInfo(true)}
                aria-label="Mais informações"
                className="ml-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-stone-600 text-xs font-serif font-bold italic text-stone-500 transition-colors active:border-amber-400 active:text-amber-400"
              >
                i
              </button>
            )}
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>
      )}

      <div className="p-3 sm:p-4 relative">
        {children}
      </div>

      {/* Popover de info — fixo e centralizado (nunca sai da tela) */}
      {info && showInfo && createPortal(
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setShowInfo(false)}
        >
          <div
            className="w-full max-w-xs rounded-2xl border border-amber-600/30 bg-stone-900 p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {title && <h4 className="mb-2 font-serif text-sm font-bold uppercase tracking-wide text-amber-500">{title}</h4>}
            <p className="text-sm leading-relaxed text-stone-300">{info}</p>
            <button
              type="button"
              onClick={() => setShowInfo(false)}
              className="mt-4 w-full rounded-xl bg-stone-800 py-2.5 text-sm font-semibold text-stone-200 active:bg-stone-700"
            >
              Entendi
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
