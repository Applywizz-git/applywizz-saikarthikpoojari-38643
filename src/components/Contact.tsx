import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';
import { linkedInUrl } from '@/lib/social';

const contactItems = [
  {
    title: 'Email',
    value: 'saikarthik.poojari@applywizard.ai',
    href: 'mailto:saikarthik.poojari@applywizard.ai',
    icon: FiMail,
    gradient: 'from-cyan-400 to-teal-400',
  },

  {
    title: 'Phone',
    value: '+1 (940) 758-3824',
    href: 'tel:+19407583824',
    icon: FiPhone,
    gradient: 'from-sky-400 to-cyan-500',
  },

  {
    title: 'Location',
    value: 'Denton, TX (Open to Relocate)',
    href: '',
    icon: FiMapPin,
    gradient: 'from-teal-400 to-emerald-500',
  },

  {
    title: 'LinkedIn',
    value: 'Connect with me on LinkedIn',
    href: linkedInUrl,
    icon: FiLinkedin,
    gradient: 'from-cyan-400 to-teal-400',
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className={`
        py-20
        md:py-32
        relative
        overflow-hidden
      `}
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className={`
          absolute
          top-0
          left-1/2
          w-1/2
          h-1/2
          bg-cyan-400/10
          blur-3xl
          -translate-x-1/2
          rounded-full
          pointer-events-none
        `}
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-1/3
          h-1/3
          bg-emerald-400/5
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-0
          w-1/4
          h-1/3
          bg-teal-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          container
          mx-auto
          px-4
          md:px-8
          relative
          z-10
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            text-left
            max-w-3xl
            mb-16
          "
        >

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-block
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
            Get In Touch
          </motion.span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
              fx-split
            "
            data-aos="fade-up"
          >
            <span className="split-text-primary">Contact</span>{' '}
            <span className="split-text-secondary">
              Me
            </span>
          </h2>

          <p
            className="
              text-muted-foreground
              max-w-3xl
              text-lg
              leading-relaxed
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Open to ServiceNow Developer, Platform Engineer,
            ITSM Consultant, and Integrations roles.
          </p>

        </div>

        {/* ===================================================
            MAIN CONTACT CARD
        =================================================== */}

        <div
          className="
            max-w-4xl
            mx-auto
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-border/60
              bg-card
              text-card-foreground
              p-8
              md:p-10
              shadow-md
              card-3d
              premium-glass-3d
              preserve-3d
              float-3d
            "
          >

            {/* Card Glows */}

            <div
              className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-primary/10
                blur-3xl
                rounded-full
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                w-40
                h-40
                bg-secondary/10
                blur-3xl
                rounded-full
                pointer-events-none
              "
            />

            {/* =================================================
                PROFILE INTRO
            ================================================= */}

            <div
              className="
                text-left
                mb-10
                relative
                z-10
              "
            >

              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  mb-3
                "
              >
                Saikarthik Poojari
              </h3>

              <p
                className="
                  text-muted-foreground
                  text-base
                  md:text-lg
                  leading-relaxed
                  max-w-3xl
                "
              >
                ServiceNow Developer | ITSM | HRSD | CMDB |
                Flow Designer | Integrations
              </p>

            </div>

            {/* =================================================
                CONTACT ITEMS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-4
                md:gap-6
                relative
                z-10
              "
            >

              {contactItems.map(
                (item, index) => {
                  const Icon = item.icon;
                  const cardSpan = item.title === 'Email' || item.title === 'LinkedIn'
                    ? 'xl:col-span-2'
                    : '';

                  const CardContent = (
                    <div
                      className="
                        flex
                        items-start
                        gap-5
                        float-3d
                      "
                    >

                      {/* Icon */}

                      <div
                        className={`
                          w-14
                          h-14
                          rounded-2xl
                          bg-gradient-to-br
                          ${item.gradient}
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          shrink-0
                          icon-3d
                        `}
                      >
                        <Icon
                          className="
                            w-7
                            h-7
                            text-white
                          "
                        />
                      </div>

                      {/* Text */}

                      <div
                        className="
                          flex-1
                          min-w-0
                        "
                      >

                        <h4
                          className="
                            text-lg
                            font-semibold
                            mb-2
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            text-muted-foreground
                            break-words
                            overflow-wrap-anywhere
                          "
                        >
                          {item.value}
                        </p>

                      </div>

                    </div>
                  );

                  /* ==========================================
                     CLICKABLE CONTACT CARD
                  ========================================== */

                  if (item.href) {
                    return (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        target={
                          item.title === 'LinkedIn'
                            ? '_blank'
                            : undefined
                        }
                        rel={
                          item.title === 'LinkedIn'
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.5,
                        }}
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                        className={`
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-primary/25
                          bg-card
                          text-card-foreground
                          p-6
                          hover:border-primary/70
                          transition-all
                          duration-300
                          hover:shadow-xl
                          hover-3d-lift
                          preserve-3d
                          float-3d
                          ${cardSpan}
                        `}
                      >

                        <div
                          className={`
                            absolute
                            top-0
                            right-0
                            w-24
                            h-24
                            bg-gradient-to-br
                            ${item.gradient}
                            opacity-10
                            blur-2xl
                            transition-opacity
                            duration-300
                            group-hover:opacity-20
                          `}
                        />

                        {CardContent}

                      </motion.a>
                    );
                  }

                  /* ==========================================
                     NON-CLICKABLE LOCATION CARD
                  ========================================== */

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-primary/25
                        bg-card
                        text-card-foreground
                        p-6
                        hover:border-primary/70
                        transition-all
                        duration-300
                        hover:shadow-xl
                        hover-3d-lift
                        preserve-3d
                        float-3d
                        ${cardSpan}
                      `}
                    >

                      <div
                        className={`
                          absolute
                          top-0
                          right-0
                          w-24
                          h-24
                          bg-gradient-to-br
                          ${item.gradient}
                          opacity-10
                          blur-2xl
                          transition-opacity
                          duration-300
                          group-hover:opacity-20
                        `}
                      />

                      {CardContent}

                    </motion.div>
                  );
                }
              )}

            </div>

            {/* =================================================
                AVAILABILITY STRIP
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.5,
              }}
              className="
                mt-8
                relative
                z-10
                rounded-2xl
                border
                border-primary/20
                bg-primary/5
                px-6
                py-5
                text-center
              "
            >

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-center
                  gap-3
                "
              >

                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-primary
                    shadow-[0_0_15px_rgba(115,120,44,0.7)]
                    animate-pulse
                  "
                />

                <p
                  className="
                    text-sm
                    md:text-base
                    font-medium
                    text-foreground
                  "
                >
                  Open to ServiceNow & Platform Opportunities
                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;