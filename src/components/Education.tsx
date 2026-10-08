import React from 'react';
import { motion } from 'framer-motion';
import {
  FiBookOpen,
  FiMapPin,
  FiAward
} from 'react-icons/fi';
import { Tilt } from './ui/Tilt';

const educationData = [
  {
    shortTitle: 'MS',
    degree: 'Masters',
    specialization: 'Computer Science',
    institution: 'University of North Texas',
    location: 'Denton, TX',
    iconComponent: FiBookOpen,
    accent: 'cyan'
  },
  {
    shortTitle: 'BS',
    degree: 'Bachelors',
    specialization: 'Computer Science Engineering',
    institution: 'Jawaharlal Nehru Technological University',
    location: 'India',
    iconComponent: FiBookOpen,
    accent: 'cyan'
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="
                relative
                overflow-hidden
                py-16
                md:py-24
                bg-transparent
            "
      style={{
        scrollMarginTop: '80px'
      }}
    >
      {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

      <div
        className="
                    absolute
                    -top-32
                    left-1/4
                    w-72
                    h-72
                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                    pointer-events-none
                "
      />

      <div
        className="
                    absolute
                    top-1/3
                    right-0
                    w-80
                    h-80
                    rounded-full
                    bg-emerald-400/10
                    blur-3xl
                    pointer-events-none
                "
      />

      <div
        className="
                    absolute
                    bottom-0
                    left-0
                    w-64
                    h-64
                    rounded-full
                    bg-teal-400/10
                    blur-3xl
                    pointer-events-none
                "
      />

      {/* =====================================================
                SUBTLE GRID
            ===================================================== */}

      <div
        className="
                    absolute
                    inset-0
                    opacity-[0.025]
                    pointer-events-none
                "
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '45px 45px'
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* =================================================
                    SECTION HEADER
                ================================================= */}

        <div className="text-left max-w-3xl mb-14 md:mb-20">

          <motion.span
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-1.5
                            rounded-full
                            text-sm
                            font-medium
                            border
                            border-primary/20
                            bg-primary/5
                            text-primary
                            mb-4
                        "
          >
            <FiBookOpen className="w-4 h-4" />
            Learning Journey
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            mb-4
                        "
          >
            <span className="split-text-primary">
              Academic
            </span>{' '}
            <span className="split-text-secondary">
              Education
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="
                            max-w-2xl
                            text-sm
                            md:text-base
                            text-muted-foreground
                            leading-relaxed
                        "
          >
            Computer Science degrees from the University of North Texas and
            Jawaharlal Nehru Technological University.
          </motion.p>
        </div>

        {/* =================================================
                    EDUCATION CARDS
                ================================================= */}

        <div
          className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-8
                        max-w-6xl
                    "
        >
          {educationData.map(
            (edu, index) => {
              const EducationIcon =
                edu.iconComponent;

              const isCyan =
                edu.accent === 'cyan';

              return (
                <Tilt
                  key={
                    edu.shortTitle
                  }
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 0.7,
                      delay:
                        index *
                        0.15,
                      type: 'spring',
                      stiffness: 90
                    }}
                    className="
                                            relative
                                            w-full
                                        "
                    style={{
                      perspective:
                        '1400px'
                    }}
                  >

                    {/* =================================
                                            BOOK SHADOW
                                        ================================= */}

                    <motion.div
                      className="
                                                edu-decor
                                                absolute
                                                left-1/2
                                                bottom-[-16px]
                                                -translate-x-1/2
                                                w-[78%]
                                                h-7
                                                rounded-[50%]
                                                bg-black/25
                                                blur-xl
                                                pointer-events-none
                                            "
                      whileHover={{
                        scaleX: 0.92,
                        opacity: 0.55
                      }}
                      transition={{
                        duration: 0.4
                      }}
                    />

                    {/* =================================
                                            BOOK CONTAINER
                                        ================================= */}

                    <div
                      className="
                                                edu-stage
                                                relative
                                                mx-auto
                                                w-full
                                                max-w-[570px]
                                                h-[410px]
                                                sm:h-[425px]
                                                md:h-[445px]
                                            "
                      style={{
                        transformStyle:
                          'preserve-3d'
                      }}
                    >

                      {/* =================================
                                                BOOK BACK
                                            ================================= */}

                      <div
                        className="
                                                    edu-decor
                                                    absolute
                                                    inset-x-5
                                                    bottom-0
                                                    h-[88%]
                                                    rounded-r-[18px]
                                                    rounded-l-[8px]
                                                    border
                                                    border-border/40
                                                    bg-background
                                                    shadow-xl
                                                    pointer-events-none
                                                "
                        style={{
                          transform:
                            'translateZ(-18px) translateY(10px)'
                        }}
                      />

                      {/* =================================
                                                PAGE BLOCK
                                            ================================= */}

                      <div
                        className="
                                                    edu-decor
                                                    absolute
                                                    left-[7%]
                                                    right-[4%]
                                                    top-[4%]
                                                    bottom-[5%]
                                                    rounded-r-[14px]
                                                    rounded-l-[5px]
                                                    border
                                                    border-border/40
                                                    bg-background
                                                    shadow-lg
                                                    pointer-events-none
                                                "
                        style={{
                          transform:
                            'translateZ(-5px)'
                        }}
                      />

                      {/* =================================
                                                LEFT BOOK COVER
                                            ================================= */}

                      <motion.div
                        className="
                                                    edu-cover
                                                    absolute
                                                    left-0
                                                    top-0
                                                    bottom-0
                                                    w-[51%]
                                                    rounded-l-[18px]
                                                    rounded-r-[5px]
                                                    border
                                                    border-border/50
                                                    overflow-hidden
                                                    shadow-2xl
                                                    z-10
                                                "
                        style={{
                          transformOrigin:
                            'right center',

                          transformStyle:
                            'preserve-3d',

                          background:
                            isCyan
                              ? 'linear-gradient(145deg, hsl(190 85% 22%), hsl(215 75% 18%), hsl(225 65% 12%))'
                              : 'linear-gradient(145deg, hsl(158 60% 22%), hsl(215 60% 18%), hsl(222 65% 12%))'
                        }}
                        whileHover={{
                          rotateY:
                            -2,
                          x: -2
                        }}
                        transition={{
                          duration:
                            0.4,
                          ease:
                            'easeOut'
                        }}
                      >

                        {/* COVER GLOW */}

                        <div
                          className="
                                                        absolute
                                                        -top-20
                                                        -left-20
                                                        w-56
                                                        h-56
                                                        rounded-full
                                                        bg-white/10
                                                        blur-3xl
                                                        pointer-events-none
                                                    "
                        />

                        {/* COVER BORDER */}

                        <div
                          className="
                                                        absolute
                                                        inset-3
                                                        md:inset-4
                                                        rounded-l-[13px]
                                                        rounded-r-[3px]
                                                        border
                                                        border-white/15
                                                        pointer-events-none
                                                    "
                        />

                        {/* BOOK SPINE */}

                        <div
                          className="
                                                        absolute
                                                        top-0
                                                        bottom-0
                                                        left-3
                                                        md:left-4
                                                        w-1.5
                                                        bg-white/10
                                                        pointer-events-none
                                                    "
                        />

                        {/* COVER CONTENT */}

                        <div
                          className="
                                                        relative
                                                        h-full
                                                        flex
                                                        flex-col
                                                        justify-between
                                                        p-5
                                                        sm:p-7
                                                        md:p-9
                                                        pl-7
                                                        sm:pl-9
                                                        md:pl-12
                                                        text-white
                                                        pointer-events-none
                                                    "
                        >

                          <div>

                            <div
                              className="
                                                                flex
                                                                items-center
                                                                gap-2
                                                                text-[9px]
                                                                sm:text-[10px]
                                                                md:text-xs
                                                                uppercase
                                                                tracking-[0.18em]
                                                                md:tracking-[0.25em]
                                                                text-white/70
                                                                mb-5
                                                                md:mb-7
                                                            "
                            >
                              <FiBookOpen className="w-3.5 h-3.5 shrink-0" />

                              <span>
                                Academic
                                Record
                              </span>
                            </div>

                            <div
                              className="
                                                                text-4xl
                                                                sm:text-5xl
                                                                md:text-7xl
                                                                font-black
                                                                tracking-tight
                                                                leading-none
                                                            "
                            >
                              {
                                edu.shortTitle
                              }
                            </div>

                            <div
                              className="
                                                                mt-3
                                                                h-px
                                                                w-16
                                                                bg-white/40
                                                            "
                            />

                          </div>

                          <div>

                            <p
                              className="
                                                                text-[9px]
                                                                sm:text-[10px]
                                                                md:text-xs
                                                                uppercase
                                                                tracking-[0.14em]
                                                                md:tracking-[0.18em]
                                                                text-white/60
                                                                mb-2
                                                            "
                            >
                              Education
                            </p>

                            <p
                              className="
                                                                text-xs
                                                                sm:text-sm
                                                                md:text-base
                                                                font-semibold
                                                                leading-relaxed
                                                                text-white
                                                            "
                            >
                              {
                                edu.degree
                              }
                            </p>

                          </div>

                        </div>

                        {/* COVER ICON */}

                        <div
                          className="
                                                        absolute
                                                        bottom-5
                                                        right-5
                                                        md:bottom-6
                                                        md:right-6
                                                        w-9
                                                        h-9
                                                        md:w-10
                                                        md:h-10
                                                        rounded-full
                                                        border
                                                        border-white/20
                                                        flex
                                                        items-center
                                                        justify-center
                                                    "
                        >
                          <EducationIcon
                            className="
                                                            w-4
                                                            h-4
                                                            md:w-5
                                                            md:h-5
                                                            text-white/70
                                                        "
                          />
                        </div>

                      </motion.div>

                      {/* =================================
                                                RIGHT INFORMATION PAGE

                                                Always above cover.
                                            ================================= */}

                      <motion.div
                        className="
                                                    edu-page
                                                    absolute
                                                    right-0
                                                    top-[3%]
                                                    bottom-[4%]
                                                    w-[51%]
                                                    rounded-r-[18px]
                                                    rounded-l-[4px]
                                                    border
                                                    border-border/60
                                                    bg-card
                                                    shadow-2xl
                                                    overflow-hidden
                                                    z-30
                                                "
                        whileHover={{
                          y: -2
                        }}
                        transition={{
                          duration:
                            0.4,
                          ease:
                            'easeOut'
                        }}
                        style={{
                          transformOrigin:
                            'left center',

                          transformStyle:
                            'preserve-3d'
                        }}
                      >

                        {/* SOFT PAGE GLOW */}

                        <div
                          className="
                                                        absolute
                                                        inset-0
                                                        pointer-events-none
                                                        opacity-40
                                                    "
                          style={{
                            background:
                              isCyan
                                ? 'radial-gradient(circle at 100% 0%, hsl(190 90% 50% / 0.13), transparent 55%)'
                                : 'radial-gradient(circle at 100% 0%, hsl(280 90% 60% / 0.13), transparent 55%)'
                          }}
                        />

                        {/* PAGE CONTENT */}

                        <div
                          className="
                                                        relative
                                                        h-full
                                                        p-4
                                                        sm:p-5
                                                        md:p-8
                                                        flex
                                                        flex-col
                                                    "
                        >

                          {/* CHAPTER */}

                          <div
                            className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                            mb-4
                                                        "
                          >

                            <span
                              className="
                                                                text-[8px]
                                                                sm:text-[9px]
                                                                md:text-[10px]
                                                                uppercase
                                                                tracking-[0.12em]
                                                                md:tracking-[0.2em]
                                                                text-muted-foreground
                                                            "
                            >
                              Chapter{' '}
                              {
                                index +
                                1
                              }
                            </span>

                            <FiAward
                              className="
                                                                w-4
                                                                h-4
                                                                text-primary
                                                                shrink-0
                                                            "
                            />

                          </div>

                          {/* DEGREE */}

                          <h3
                            className="
                                                            text-sm
                                                            sm:text-base
                                                            md:text-xl
                                                            font-bold
                                                            leading-snug
                                                            text-foreground
                                                            mb-2
                                                            break-words
                                                        "
                          >
                            {
                              edu.degree
                            }
                          </h3>

                          {/* SPECIALIZATION */}

                          <p
                            className="
                                                            text-[10px]
                                                            sm:text-xs
                                                            md:text-sm
                                                            text-primary
                                                            font-semibold
                                                            leading-relaxed
                                                            mb-4
                                                            md:mb-5
                                                            break-words
                                                        "
                          >
                            {
                              edu.specialization
                            }
                          </p>

                          {/* DIVIDER */}

                          <div className="relative mb-4 md:mb-5">

                            <div className="h-px bg-border" />

                            <div
                              className="
                                                                absolute
                                                                left-0
                                                                top-0
                                                                w-10
                                                                md:w-12
                                                                h-px
                                                                bg-primary
                                                            "
                            />

                          </div>

                          {/* INSTITUTION */}

                          <div className="mb-4">

                            <p
                              className="
                                                                text-[8px]
                                                                sm:text-[9px]
                                                                md:text-[10px]
                                                                uppercase
                                                                tracking-[0.12em]
                                                                md:tracking-[0.16em]
                                                                text-muted-foreground
                                                                mb-1.5
                                                            "
                            >
                              Institution
                            </p>

                            <p
                              className="
                                                                text-xs
                                                                sm:text-sm
                                                                md:text-base
                                                                font-semibold
                                                                leading-snug
                                                                text-foreground
                                                                break-words
                                                            "
                            >
                              {
                                edu.institution
                              }
                            </p>

                          </div>

                          {/* LOCATION */}

                          <div
                            className="
                                                            flex
                                                            items-start
                                                            gap-2
                                                            mb-3
                                                        "
                          >

                            <FiMapPin
                              className="
                                                                w-3.5
                                                                h-3.5
                                                                text-primary
                                                                shrink-0
                                                                mt-0.5
                                                            "
                            />

                            <span
                              className="
                                                                text-[10px]
                                                                sm:text-xs
                                                                md:text-sm
                                                                text-muted-foreground
                                                                leading-relaxed
                                                            "
                            >
                              {
                                edu.location
                              }
                            </span>

                          </div>

                          {/* BOTTOM */}

                          <div
                            className="
                                                            mt-auto
                                                            pt-4
                                                            md:pt-5
                                                        "
                          >

                            <div
                              className="
                                                                flex
                                                                items-center
                                                                justify-between
                                                                text-[7px]
                                                                sm:text-[8px]
                                                                md:text-[9px]
                                                                uppercase
                                                                tracking-[0.12em]
                                                                md:tracking-[0.18em]
                                                                text-muted-foreground/70
                                                            "
                            >
                              <span>
                                Academic
                                Journey
                              </span>

                              <span>
                                DD
                              </span>
                            </div>

                          </div>

                        </div>
                      </motion.div>

                    </div>

                  </motion.div>
                </Tilt>
              );
            }
          )}
        </div>

        {/* =====================================================
                    FOOTNOTE
                ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="
                        mt-20
                        flex
                        items-center
                        justify-center
                        gap-3
                        text-xs
                        md:text-sm
                        text-muted-foreground
                    "
        >

          <span className="w-10 h-px bg-border" />

          <span className="flex items-center gap-2 text-center">
            <FiBookOpen className="w-4 h-4 text-primary shrink-0" />

            <span>
              Computer Science • University of North Texas • JNTU
            </span>
          </span>

          <span className="w-10 h-px bg-border" />

        </motion.div>

      </div>

      {/* =====================================================
                RESPONSIVE SAFETY
            ===================================================== */}

      <style>
        {`
                    #education {
                        width: 100%;
                        max-width: 100%;
                        box-sizing: border-box;
                        overflow-x: hidden;
                    }

                    #education * {
                        box-sizing: border-box;
                    }

                    #education .container {
                        max-width: 100%;
                    }

                    @media (max-width: 767px) {
                        #education {
                            overflow-x: hidden;
                        }

                        #education .container {
                            width: 100%;
                            padding-left: 12px;
                            padding-right: 12px;
                        }
                    }

                    @media (max-width: 420px) {
                        #education .container {
                            padding-left: 8px;
                            padding-right: 8px;
                        }
                    }
                `}
      </style>

    </section>
  );
};

export default Education;