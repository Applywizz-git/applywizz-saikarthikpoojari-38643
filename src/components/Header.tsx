import { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon, FiMail, FiLinkedin } from 'react-icons/fi';
import { linkedInUrl } from '@/lib/social';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  const handleMobileNavClick = (to: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }, 350);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },

    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },

    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${isScrolled
            ? 'header-bar header-bar-scrolled py-3'
            : 'header-bar py-4'
          }
        `}
      >
        <div
          className="
            container
            mx-auto
            px-4
            md:px-8
          "
        >
          <nav
            className="
              grid
              grid-cols-[auto_minmax(0,1fr)_auto]
              items-center
              gap-3
            "
          >

            {/* =================================================
                LOGO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative z-20 col-start-1 shrink-0"
            >
              <span
                className="
                  text-2xl
                  font-display
                  font-bold
                  gradient-text-maroon-teal
                "
              >
                SP
              </span>
            </motion.div>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="nav-pill-shell col-start-2 hidden min-w-0 justify-self-center xl:flex"
            >
              <ul
                className="nav-pill pointer-events-auto"
                onMouseLeave={() => setHoveredSection(null)}
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.to;
                  const isHovered = hoveredSection === item.to && !isActive;

                  return (
                    <li
                      key={item.to}
                      className="relative"
                      onMouseEnter={() => setHoveredSection(item.to)}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="nav-active-pill"
                          transition={{
                            type: 'spring',
                            stiffness: 420,
                            damping: 34,
                            mass: 0.7,
                          }}
                        />
                      )}
                      {isHovered && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="nav-hover-pill"
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 36,
                          }}
                        />
                      )}
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onSetActive={handleSetActive}
                        className={`nav-pill-link ${isActive ? 'is-active' : ''}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* =================================================
                HEADER ACTIONS
            ================================================= */}

            <div
              className="
                relative
                z-20
                col-start-3
                flex
                shrink-0
                items-center
                gap-2
              "
            >

              {/* Contact */}

              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="nav-orb inline-flex"
                aria-label="Open contact section"
              >
                <FiMail className="h-5 w-5" />
              </motion.a>

              <motion.a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="nav-orb inline-flex"
                aria-label="Visit LinkedIn profile"
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.a>

              {/* Theme Toggle */}

              <motion.button
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                onClick={toggleTheme}
                whileHover={{
                  scale: 1.06,
                  rotate: isDark ? 18 : -12,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="nav-orb inline-flex"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FiSun className="h-5 w-5" />
                ) : (
                  <FiMoon className="h-5 w-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}

              <button
                onClick={() =>
                  setIsMobileMenuOpen(true)
                }
                className="nav-orb inline-flex xl:hidden"
                aria-label="Open menu"
              >
                <HiMenuAlt3
                  className="
                    w-6
                    h-6
                  "
                />
              </button>

            </div>

          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="
              fixed
              inset-0
              z-[100]
              xl:hidden
              overflow-y-auto
              nav-mobile-panel
            "
          >

            <div
              className="
                flex
                flex-col
                min-h-full
                px-5
                py-6
                sm:p-8
              "
            >

              {/* =================================================
                  MOBILE MENU HEADER
              ================================================= */}

              <div
                className="
                  flex
                  justify-between
                  items-center
                  mb-12
                "
              >

                <span
                  className="
                    text-2xl
                    font-display
                    font-bold
                    gradient-text-maroon-teal
                  "
                >
                  SP
                </span>

                <button
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  className="
                    p-2
                    text-foreground
                    hover:text-primary
                    transition-colors
                  "
                  aria-label="Close menu"
                >
                  <HiX
                    className="
                      w-6
                      h-6
                    "
                  />
                </button>

              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <nav
                className="
                  flex-1
                  flex
                  flex-col
                  justify-start
                  overflow-y-auto
                "
              >

                <ul
                  className="
                    space-y-2
                    sm:space-y-4
                  "
                >
                  {navItems.map(
                    (item, index) => (
                      <motion.li
                        key={item.to}
                        custom={index}
                        variants={itemVariants}
                      >
                        <button
                          onClick={() =>
                            handleMobileNavClick(
                              item.to
                            )
                          }
                          className={`
                            w-full
                            rounded-full
                            px-5
                            py-3
                            text-left
                            text-xl
                            sm:text-2xl
                            font-display
                            font-bold
                            transition-all
                            duration-300
                            ${activeSection === item.to
                              ? 'nav-mobile-active'
                              : 'text-foreground hover:bg-white/5 hover:text-primary'
                            }
                          `}
                        >
                          {item.name}
                        </button>
                      </motion.li>
                    )
                  )}
                </ul>

              </nav>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  flex
                  justify-center
                  items-center
                  gap-4
                  mt-12
                "
              >

                {/* Contact */}

                <a
                  href="#contact"
                  className="nav-orb inline-flex"
                  aria-label="Open contact section"
                >
                  <FiMail
                    className="
                      w-6
                      h-6
                    "
                  />
                </a>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-orb inline-flex"
                  aria-label="Visit LinkedIn profile"
                >
                  <FiLinkedin className="h-6 w-6" />
                </a>

                {/* Theme Toggle */}

                <button
                  onClick={toggleTheme}
                  className="nav-orb inline-flex"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <FiSun
                      className="
                        w-6
                        h-6
                      "
                    />
                  ) : (
                    <FiMoon
                      className="
                        w-6
                        h-6
                      "
                    />
                  )}
                </button>

              </motion.div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;