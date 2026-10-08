import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        role="status"
        aria-label="Loading Saikarthik Poojari's portfolio"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <motion.div
          aria-hidden="true"
          className="absolute h-72 w-72 rounded-full border border-primary/10 sm:h-96 sm:w-96"
          animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.3, 0.75, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute h-56 w-56 rounded-full border border-secondary/15 sm:h-72 sm:w-72"
          animate={{ scale: [1.06, 0.94, 1.06], opacity: [0.65, 0.2, 0.65] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary shadow-[var(--shadow-glow)]"
          >
            SP
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-primary sm:text-xs"
          >
            Portfolio · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Saikarthik{' '}
            <span className="gradient-text-maroon-teal">Poojari</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.24em]"
          >
            ServiceNow Developer
            <span className="mx-2 text-secondary" aria-hidden="true">/</span>
            Workflow Automation
          </motion.p>

          <div className="mt-10 h-px w-48 overflow-hidden rounded-full bg-muted sm:w-64">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-secondary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Preparing your experience
          </motion.p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Preloader;
