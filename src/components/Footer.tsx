import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { linkedInUrl } from '@/lib/social';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        py-12
        relative
        overflow-hidden
        bg-muted/50
        border-t
        border-border/60
      "
    >

      {/* =====================================================
          TOP GRADIENT LINE
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-1
          bg-gradient-to-r
          from-primary
          via-primary-light
          to-secondary
        "
      />

      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-72
          h-72
          bg-primary/5
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          w-72
          h-72
          bg-secondary/5
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-64
          h-64
          bg-cyan-400/10
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

        <div
          className="
            flex
            flex-col
            items-start
            text-left
          "
        >

          {/* =================================================
              LOGO / INITIALS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-6"
          >

            <div
              className="
                w-20
                h-20
                rounded-3xl
                bg-gradient-to-br
                from-primary
                via-primary-light
                to-secondary
                flex
                items-center
                justify-center
                shadow-2xl
                premium-glass-3d
                hover-3d-lift
                transition-transform
                duration-300
              "
            >

              <span
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                SP
              </span>

            </div>

          </motion.div>

          {/* =================================================
              NAME
          ================================================= */}

          <motion.h3
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
              delay: 0.1,
            }}
            className="
              text-2xl
              font-bold
              mb-3
              text-foreground
            "
          >
            Saikarthik Poojari
          </motion.h3>

          {/* =================================================
              PROFESSIONAL TITLE
          ================================================= */}

          <motion.p
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
              delay: 0.2,
            }}
            className="
              text-muted-foreground
              max-w-2xl
              mb-8
              leading-relaxed
            "
          >
            ServiceNow Developer | ITSM | HRSD | CMDB |
            Flow Designer | JavaScript & Integrations
          </motion.p>

          {/* =================================================
              COPYRIGHT
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              text-sm
              text-muted-foreground
              flex
              items-center
              gap-1
              flex-wrap
              justify-start
            "
          >
            © {currentYear}{' '}
            <span
              className="
                text-primary
                font-semibold
              "
            >
              Saikarthik Poojari
            </span>
            . All rights reserved.
          </motion.p>

          {/* =================================================
              BUILT WITH
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              text-xs
              text-muted-foreground
              mt-3
              flex
              items-center
              gap-1
              flex-wrap
              justify-start
            "
          >
            Built with{' '}
            <FiHeart
              className="
                w-3
                h-3
                text-teal-400
                animate-pulse
              "
            />{' '}
            using React, TypeScript & Tailwind CSS
          </motion.p>

          {/* =================================================
              LINKEDIN
          ================================================= */}

          <motion.a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
            }}
            whileHover={{
              y: -3,
              scale: 1.04,
            }}
            className="
              inline-flex
              items-center
              gap-2
              mt-4
              px-4
              py-2
              rounded-full
              border
              border-border/60
              bg-card
              text-muted-foreground
              hover:text-primary
              hover:border-primary/30
              hover:shadow-lg
              transition-all
              duration-300
              text-sm
            "
          >

            <FiLinkedin
              className="
                w-4
                h-4
              "
            />

            LinkedIn

          </motion.a>

        </div>

      </div>

      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      <Link
        to="home"
        smooth={true}
        duration={800}
        className="
          fixed
          bottom-6
          right-6
          z-50
          cursor-pointer
        "
        aria-label="Scroll to top"
      >

        <motion.div
          whileHover={{
            scale: 1.1,
            y: -4,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-primary
            to-secondary
            flex
            items-center
            justify-center
            shadow-2xl
            text-white
            animate-bounce-slow
          "
        >

          <FiArrowUp
            className="
              w-6
              h-6
            "
          />

        </motion.div>

      </Link>

    </footer>
  );
};

export default Footer;