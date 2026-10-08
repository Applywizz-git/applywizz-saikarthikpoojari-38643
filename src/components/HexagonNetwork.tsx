import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiMapPin, FiCheckCircle, FiBriefcase } from 'react-icons/fi';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  gradient: string;
  responsibilities: string[];
}

interface HexagonNetworkProps {
  experiences: Experience[];
  onHexClick?: (id: number) => void;
}

const PALETTE = [
  { border: '#67e8f9', lightBorder: '#0e7490', bg: 'rgba(103,232,249,0.16)', lightBg: 'rgba(14,116,144,0.12)', text: '#67e8f9', lightText: '#0e7490', glow: 'rgba(103,232,249,0.5)', lightGlow: 'rgba(14,116,144,0.28)' },
  { border: '#5eead4', lightBorder: '#0f766e', bg: 'rgba(94,234,212,0.16)', lightBg: 'rgba(15,118,110,0.12)', text: '#5eead4', lightText: '#0f766e', glow: 'rgba(94,234,212,0.5)', lightGlow: 'rgba(15,118,110,0.28)' },
  { border: '#34d399', lightBorder: '#047857', bg: 'rgba(52,211,153,0.16)', lightBg: 'rgba(4,120,87,0.12)', text: '#34d399', lightText: '#047857', glow: 'rgba(52,211,153,0.5)', lightGlow: 'rgba(4,120,87,0.28)' },
  { border: '#38bdf8', lightBorder: '#0369a1', bg: 'rgba(56,189,248,0.16)', lightBg: 'rgba(3,105,161,0.12)', text: '#38bdf8', lightText: '#0369a1', glow: 'rgba(56,189,248,0.5)', lightGlow: 'rgba(3,105,161,0.28)' },
  { border: '#2dd4bf', lightBorder: '#0f766e', bg: 'rgba(45,212,191,0.16)', lightBg: 'rgba(15,118,110,0.12)', text: '#2dd4bf', lightText: '#0f766e', glow: 'rgba(45,212,191,0.5)', lightGlow: 'rgba(15,118,110,0.28)' },
  { border: '#6ee7b7', lightBorder: '#047857', bg: 'rgba(110,231,183,0.16)', lightBg: 'rgba(4,120,87,0.12)', text: '#6ee7b7', lightText: '#047857', glow: 'rgba(110,231,183,0.5)', lightGlow: 'rgba(4,120,87,0.28)' },
  { border: '#22d3ee', lightBorder: '#0e7490', bg: 'rgba(34,211,238,0.16)', lightBg: 'rgba(14,116,144,0.12)', text: '#22d3ee', lightText: '#0e7490', glow: 'rgba(34,211,238,0.5)', lightGlow: 'rgba(14,116,144,0.28)' },
  { border: '#a7f3d0', lightBorder: '#047857', bg: 'rgba(167,243,208,0.16)', lightBg: 'rgba(4,120,87,0.14)', text: '#a7f3d0', lightText: '#047857', glow: 'rgba(167,243,208,0.5)', lightGlow: 'rgba(4,120,87,0.28)' },
];

const R = 88;
const W = Math.sqrt(3) * R;
const H_STEP = 1.5 * R;
const PAD_X = 20;
const PAD_Y = 20;

function centerOf(expIdx: number) {
  if (expIdx < 3) {
    // Row 0: indices 0,1,2
    return { x: PAD_X + W / 2 + expIdx * W, y: PAD_Y + R };
  } else if (expIdx < 6) {
    // Row 1: indices 3,4,5 (shifted right by W/2)
    const col = expIdx - 3;
    return { x: PAD_X + W + col * W, y: PAD_Y + R + H_STEP };
  } else {
    // Row 2: indices 6,7 (shifted back left)
    const col = expIdx - 6;
    return { x: PAD_X + W / 2 + col * W, y: PAD_Y + R + 2 * H_STEP };
  }
}

const CONNECTIONS = [
  [0, 1], [1, 2],           // row 0
  [3, 4], [4, 5],           // row 1
  [6, 7],                   // row 2
  [0, 3], [1, 3], [1, 4], [2, 4], [2, 5],  // row 0-1
  [3, 6], [4, 6], [4, 7], [5, 7],  // row 1-2
];

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
}

function wrapText(text: string, maxLen: number): string[] {
  if (text.length <= maxLen) return [text];
  const words = text.split(' ');
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxLen) {
      cur = (cur + ' ' + w).trim();
    } else {
      if (cur) lines.push(cur);
      cur = w.length > maxLen ? w.slice(0, maxLen - 1) + '…' : w;
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 2);
}

const HexagonNetwork = ({ experiences }: HexagonNetworkProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains('dark'));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const palette = PALETTE.map((swatch) =>
    isDark
      ? { border: swatch.border, bg: swatch.bg, text: swatch.text, glow: swatch.glow }
      : { border: swatch.lightBorder, bg: swatch.lightBg, text: swatch.lightText, glow: swatch.lightGlow },
  );

  const SVG_W = PAD_X * 2 + W * 3 + W / 2;
  const SVG_H = PAD_Y * 2 + R * 2 + 2 * H_STEP;

  const selectedExp = experiences.find(e => e.id === selectedId) ?? null;
  const palIdx = selectedExp ? (selectedExp.id - 1) % palette.length : 0;

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedId(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedId]);

  return (
    <div className="w-full relative select-none">
      <div className="hex-scroll w-full overflow-x-auto">
        <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="mx-auto h-auto w-[560px] max-w-none sm:w-full sm:max-w-[680px]" role="img" aria-label="Experience network">
          <defs>
            {experiences.map((_, i) => {
              const p = palette[i % palette.length];
              return (
                <radialGradient key={i} id={`hfill${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={p.border} stopOpacity="0.28" />
                  <stop offset="100%" stopColor={p.border} stopOpacity="0.05" />
                </radialGradient>
              );
            })}
            <filter id="hglow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {CONNECTIONS.map(([a, b], ci) => {
            if (a >= experiences.length || b >= experiences.length) return null;
            const ca = centerOf(a);
            const cb = centerOf(b);
            const p = palette[a % palette.length];
            return (<line key={ci} x1={ca.x} y1={ca.y} x2={cb.x} y2={cb.y} stroke={p.border} strokeWidth="1" strokeOpacity="0.18" strokeDasharray="4 6" />);
          })}
          {experiences.map((exp, i) => {
            const c = centerOf(i);
            const p = palette[i % palette.length];
            const isH = hoveredId === exp.id;
            const isS = selectedId === exp.id;
            const sc = isH || isS ? 1.1 : 1;
            const nameLines = wrapText(exp.company, 12);
            return (
              <g key={exp.id} style={{ transform: `scale(${sc})`, transformOrigin: `${c.x}px ${c.y}px`, transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1)', cursor: 'pointer' }}
                onMouseEnter={() => setHoveredId(exp.id)} onMouseLeave={() => setHoveredId(null)} onClick={() => setSelectedId(prev => prev === exp.id ? null : exp.id)}>
                {(isH || isS) && (<polygon points={hexPoints(c.x, c.y, R + 6)} fill="none" stroke={p.border} strokeWidth="3" strokeOpacity="0.5" filter="url(#hglow)" />)}
                <polygon points={hexPoints(c.x, c.y, R - 2)} fill={`url(#hfill${i})`} stroke={p.border} strokeWidth={isH || isS ? 1.8 : 1} strokeOpacity={isH || isS ? 0.85 : 0.38} />
                <circle cx={c.x + R * 0.6} cy={c.y - R * 0.62} r="13" fill={p.border} opacity="0.9" />
                <text x={c.x + R * 0.6} y={c.y - R * 0.62} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="10" fontWeight="800" fontFamily="Inter,sans-serif">{i + 1}</text>
                {nameLines.map((line, li) => (
                  <text key={li} x={c.x} y={c.y - 16 + li * 17 + (nameLines.length === 1 ? 8 : 0)} textAnchor="middle" dominantBaseline="middle" fill={p.text} fontSize="13" fontWeight="700" fontFamily="Inter,sans-serif"
                    style={{ filter: isH ? `drop-shadow(0 0 5px ${p.border})` : 'none' }}>{line}</text>
                ))}
                <line x1={c.x - R * 0.42} y1={c.y + 12} x2={c.x + R * 0.42} y2={c.y + 12} stroke={p.border} strokeWidth="0.7" strokeOpacity="0.45" />
                <text x={c.x} y={c.y + 28} textAnchor="middle" dominantBaseline="middle" fill={isDark ? 'rgba(255,255,255,0.72)' : 'hsl(222 32% 28%)'} fontSize="10" fontFamily="Inter,sans-serif" fontWeight="600">{exp.duration}</text>
              </g>
            );
          })}
        </svg>
      </div>
      {createPortal(
        <AnimatePresence>
          {selectedExp && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md" onClick={() => setSelectedId(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.88, y: 36 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 24 }}
                transition={{ type: 'spring', stiffness: 340, damping: 30 }} onClick={e => e.stopPropagation()}
                className="experience-detail relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col premium-glass-3d"
                style={{ border: `1px solid ${palette[palIdx].border}55`, boxShadow: `0 0 80px -15px ${palette[palIdx].glow}` }}>
                <div className="relative px-5 pt-6 pb-5 sm:px-7 sm:pt-7 sm:pb-6 flex-shrink-0" style={{ background: `linear-gradient(135deg, ${palette[palIdx].border}22 0%, ${palette[palIdx].border}08 60%, transparent 100%)`, borderBottom: `1px solid ${palette[palIdx].border}22` }}>
                  <button type="button" onClick={(e) => { e.preventDefault(); setSelectedId(null); }}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-muted/50 border border-border hover:bg-muted"
                  >
                    <FiX className="w-4 h-4 text-foreground/60" />
                  </button>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
                      style={{ background: palette[palIdx].bg, color: palette[palIdx].text, border: `1px solid ${palette[palIdx].border}55` }}>
                      <FiBriefcase className="w-3 h-3" />{selectedExp.company}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight mb-5 pr-10 text-foreground tracking-tight">{selectedExp.role}</h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold" style={{ background: palette[palIdx].bg, color: palette[palIdx].text, border: `1px solid ${palette[palIdx].border}40` }}>
                      <FiCalendar className="w-3.5 h-3.5 shrink-0" /><span>{selectedExp.duration}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-muted-foreground bg-muted/30 border border-border">
                      <FiMapPin className="w-3.5 h-3.5 shrink-0 text-muted-foreground" /><span>{selectedExp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-5 sm:px-7 sm:py-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-5 rounded-full" style={{ background: palette[palIdx].border }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: palette[palIdx].text }}>Key Responsibilities & Achievements</p>
                  </div>
                  <ol className="space-y-4">
                    {selectedExp.responsibilities.map((item, idx) => (
                      <motion.li key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.055, type: 'spring', stiffness: 280, damping: 24 }} className="flex items-start gap-4 group">
                        <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: palette[palIdx].bg, color: palette[palIdx].text, border: `1px solid ${palette[palIdx].border}44` }}>{idx + 1}</span>
                        <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-200">{item}</p>
                      </motion.li>
                    ))}
                  </ol>
                </div>
                <div className="flex-shrink-0 px-7 py-4 flex items-center justify-between" style={{ borderTop: `1px solid ${palette[palIdx].border}18`, background: 'rgba(255,255,255,0.015)' }}>
                  <span className="text-xs font-medium text-muted-foreground">{selectedExp.responsibilities.length} achievements recorded</span>
                  <button type="button" onClick={(e) => { e.preventDefault(); setSelectedId(null); }}
                    className="text-xs font-bold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95" style={{ background: palette[palIdx].bg, color: palette[palIdx].text, border: `1px solid ${palette[palIdx].border}44` }}>Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default HexagonNetwork;