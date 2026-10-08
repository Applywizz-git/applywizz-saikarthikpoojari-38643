import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { Link } from 'react-scroll';

import {
  FiDownload,
  FiArrowRight,
  FiLinkedin,
} from 'react-icons/fi';
import { linkedInUrl } from '@/lib/social';

/* =========================================================
   SAIKARTHIK POOJARI — HERO TYPEWRITER CONTENT
========================================================= */

const typewriterTexts = [
  'ServiceNow Platform & App Development',
  'ITSM, HRSD & Workflow Automation',
  'CMDB, Discovery & ITOM Visibility',
  'REST Integrations & Flow Designer',
  'Now Assist, AI & Intelligent Operations',
];

/* =========================================================
   HERO COMPONENT
========================================================= */

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* =======================================================
     TYPEWRITER EFFECT
  ======================================================= */

  useEffect(() => {
    const fullText =
      typewriterTexts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (
            displayText.length <
            fullText.length
          ) {
            setDisplayText(
              fullText.slice(
                0,
                displayText.length + 1
              )
            );
          } else {
            setTimeout(
              () => setIsDeleting(true),
              1800
            );
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(
              displayText.slice(0, -1)
            );
          } else {
            setIsDeleting(false);

            setCurrentTextIndex(
              (prev) =>
                (prev + 1) %
                typewriterTexts.length
            );
          }
        }
      },
      isDeleting ? 35 : 80
    );

    return () =>
      clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentTextIndex,
  ]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pt-28
        pb-20
        transition-colors
        duration-500
        text-foreground
        bg-transparent
      "
    >

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          container
          mx-auto
          px-4
          md:px-8
          relative
          z-20
        "
      >

        <div
          className="
            max-w-6xl
            mx-auto
            grid
            lg:grid-cols-12
            gap-10
            items-end
          "
        >

          <div
            className="
              lg:col-span-7
              flex
              flex-col
              items-start
            "
          >

            <div
              className="
                w-full
                text-left
              "
            >

              {/* =================================================
                  MAIN HEADING
              ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  text-[2rem]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  max-w-full
                  break-words
                  font-bold
                  mb-6
                  leading-[1.05]
                  tracking-tight
                  text-foreground
                  drop-shadow-sm
                  fx-fold
                "
              >
                <span>Hi, I'm</span>{' '}

                <span
                  className="
                    bg-gradient-to-r
                    from-primary
                    via-primary-light
                    to-secondary
                    bg-clip-text
                    text-transparent
                    inline-block
                  "
                >
                  Saikarthik
                </span>

                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-secondary
                    to-primary
                    bg-clip-text
                    text-transparent
                    inline-block
                    mt-2
                  "
                >
                  Poojari
                </span>
              </motion.h1>

              {/* =================================================
                  PROFESSIONAL TITLE
              ================================================= */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="
                  text-base
                  md:text-xl
                  font-medium
                  mb-8
                  leading-relaxed
                  text-muted-foreground
                "
              >
                ServiceNow Developer{' '}
                <span className="hidden sm:inline">
                  |
                </span>{' '}
                ITSM, HRSD & Workflow Automation{' '}
                <span className="hidden sm:inline">
                  |
                </span>{' '}
                CMDB, Integrations & AI Operations
              </motion.h2>

              {/* =================================================
                  PROFESSIONAL SUMMARY
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="
                  text-sm
                  md:text-base
                  leading-[1.8]
                  mb-10
                  max-w-3xl
                  text-muted-foreground
                "
              >
                Senior ServiceNow Developer with{' '}
                <span className="text-primary font-semibold">
                  7+ years
                </span>{' '}
                of IT experience, including 4+ years
                delivering enterprise ServiceNow solutions
                across higher education, healthcare, and
                consulting environments.
              </motion.p>

              {/* =================================================
                  TYPEWRITER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="
                  min-h-[64px]
                  md:h-12
                  mb-10
                  flex
                  items-center
                  justify-start
                  px-0
                "
              >

                <span
                  className="
                    text-base
                    sm:text-lg
                    md:text-2xl
                    font-mono
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                    bg-clip-text
                    text-transparent
                    leading-relaxed
                    break-words
                    text-left
                  "
                >
                  {displayText}

                  <span className="text-primary">
                    |
                  </span>
                </span>

              </motion.div>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  justify-start
                  items-stretch
                  sm:items-start
                  w-full
                "
              >

                {/* View Experience */}

                <Link
                  to="experience"
                  smooth
                  offset={-80}
                  duration={500}
                  className="
                    group
                    cursor-pointer
                    w-full
                    sm:w-auto
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      w-full
                      sm:w-auto
                      px-8
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-primary
                      to-primary-light
                      text-primary-foreground
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-3
                      shadow-xl
                      hover:shadow-2xl
                      transition-all
                      duration-300
                    "
                  >
                    View Experience

                    <FiArrowRight
                      className="
                        group-hover:translate-x-1
                        transition-transform
                        icon-3d
                      "
                    />
                  </motion.div>
                </Link>

                {/* Download Resume */}

                <motion.a
                  href="/resume.pdf"
                  download="Saikarthik_Poojari_Resume.pdf"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-full
                    sm:w-auto
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition-all
                    duration-300
                    premium-glass-3d
                    hover:shadow-lg
                    hover:border-primary/50
                  "
                >
                  Download Resume

                  <FiDownload
                    className="icon-3d"
                  />
                </motion.a>

                <motion.a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-2xl border border-primary/30 px-8 py-4 font-semibold transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 sm:w-auto"
                  aria-label="Visit Saikarthik Poojari's LinkedIn profile"
                >
                  <span className="flex items-center justify-center gap-3">
                    <FiLinkedin className="h-5 w-5" />
                    LinkedIn
                  </span>
                </motion.a>

              </motion.div>

            </div>

          </div>

          {/* ===================================================
              HERO STATISTICS
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="
              lg:col-span-5
              grid
              grid-cols-2
              gap-3
              w-full
              lg:translate-y-8
            "
          >

            {[
              {
                value: '7+',
                label: 'Years IT Experience',
              },
              {
                value: '4+',
                label: 'ServiceNow Years',
              },
              {
                value: '45K+',
                label: 'Users Supported',
              },
              {
                value: '10K+',
                label: 'Assets Managed',
              },
            ].map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-3xl
                    p-4
                    sm:p-6
                    transition-all
                    duration-300
                    premium-glass-3d
                    hover:shadow-xl
                    hover:border-primary/50
                  "
                >

                  <h3
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      mb-2
                    "
                    style={{
                      background:
                        'linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))',
                      WebkitBackgroundClip:
                        'text',
                      WebkitTextFillColor:
                        'transparent',
                      backgroundClip:
                        'text',
                    }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-muted-foreground
                    "
                  >
                    {item.label}
                  </p>

                </motion.div>
              )
            )}

          </motion.div>

        </div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-4
          left-1/2
          hidden
          -translate-x-1/2
          sm:block
        "
      >

        <Link
          to="about"
          smooth
          offset={-80}
          duration={500}
        >

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              w-7
              h-12
              rounded-full
              border-2
              flex
              justify-center
              pt-2
              cursor-pointer
              border-muted-foreground/40
            "
          >

            <div
              className="
                w-2
                h-2
                rounded-full
              "
              style={{
                backgroundColor:
                  'hsl(var(--primary))',
              }}
            />

          </motion.div>

        </Link>

      </motion.div>

    </section>
  );
};

export default Hero;
