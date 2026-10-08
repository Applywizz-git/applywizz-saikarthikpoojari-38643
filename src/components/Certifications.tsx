import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiAward,
  FiCheckCircle,
  FiBookOpen,
} from 'react-icons/fi';

import { Tilt } from './ui/Tilt';

/* =========================================================
   SAIKARTHIK POOJARI — CERTIFICATIONS
========================================================= */

const certifications = [
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    icon: FiAward,
    gradient: 'from-sky-400 to-cyan-500',
    verified: true,
  },
  {
    title: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    icon: FiBookOpen,
    gradient: 'from-cyan-400 to-teal-400',
    verified: true,
  },
  {
    title: 'ServiceNow Certified Implementation Specialist - IT Service Management (CIS - ITSM)',
    issuer: 'ServiceNow',
    icon: FiCheckCircle,
    gradient: 'from-teal-400 to-emerald-500',
    verified: true,
  },
  {
    title: 'ServiceNow Certified Implementation Specialist - Data Foundations (CIS - DF)',
    issuer: 'ServiceNow',
    icon: FiAward,
    gradient: 'from-emerald-400 to-cyan-500',
    verified: true,
  },
];

const Certifications = () => {
  const [flippedTitle, setFlippedTitle] = useState<string | null>(null);

  const toggleFlip = (title: string, force = false) => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (!force && !isTouch) return;
    setFlippedTitle((current) => (current === title ? null : title));
  };

  return (
    <section
      id="certifications"
      className="
        py-20
        md:py-32
        relative
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          bottom-0
          left-0
          w-1/2
          h-1/2
          bg-cyan-400/10
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
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-1/3
          h-1/3
          bg-teal-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

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
            Credentials
          </motion.span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
              fx-fold
            "
          >
            <span className="split-text-primary">Professional</span>{' '}
            <span className="split-text-secondary">
              Certifications
            </span>
          </h2>

          <p
            className="
              text-muted-foreground
              max-w-3xl
              text-lg
              leading-relaxed
            "
          >
            ServiceNow platform certifications aligned to implementation,
            development, service operations, and business process automation.
          </p>

        </div>

        {/* ===================================================
            CERTIFICATION CARDS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            max-w-7xl
          "
        >

          {certifications.map(
            (cert, index) => {
              const IconComponent = cert.icon;

              return (
                <Tilt
                  key={cert.title}
                  className="min-w-0"
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.6,
                    }}
                    className="
                      cert-card
                      h-[320px]
                      sm:h-[340px]
                      xl:h-[360px]
                      w-full
                      cursor-pointer
                    "
                    style={{
                      perspective: '1200px',
                    }}
                    role="button"
                    tabIndex={0}
                    aria-pressed={flippedTitle === cert.title}
                    onClick={() => toggleFlip(cert.title)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        toggleFlip(cert.title, true);
                      }
                    }}
                  >

                    {/* =================================================
                        FLIP CONTAINER
                    ================================================= */}

                    <div
                      className={`
                        cert-flip
                        relative
                        w-full
                        h-full
                        [transform-style:preserve-3d]
                        ${flippedTitle === cert.title ? 'is-flipped' : ''}
                      `}
                    >

                      {/* ===============================================
                          FRONT FACE
                      =============================================== */}

                      <div
                        className="
                          absolute
                          inset-0
                          [backface-visibility:hidden]
                          block
                          h-full
                          overflow-hidden
                          rounded-3xl
                          border
                          border-primary/30
                          bg-card
                          text-card-foreground
                          p-6
                          premium-glass-3d
                          flex
                          flex-col
                          items-center
                          justify-center
                          text-center
                          shadow-lg
                        "
                      >

                        {/* Gradient Glow */}

                        <div
                          className={`
                            absolute
                            top-0
                            right-0
                            w-32
                            h-32
                            bg-gradient-to-br
                            ${cert.gradient}
                            opacity-10
                            blur-3xl
                          `}
                        />

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            w-24
                            h-24
                            bg-primary/5
                            blur-3xl
                            rounded-full
                          "
                        />

                        {/* Verified Badge */}

                        <div
                          className="
                            absolute
                            top-4
                            right-4
                            flex
                            items-center
                            gap-1
                            bg-primary/10
                            text-primary
                            text-xs
                            px-3
                            py-1
                            rounded-full
                            border
                            border-primary/20
                            z-10
                          "
                        >
                          <FiCheckCircle
                            className="w-3 h-3"
                          />

                          Verified
                        </div>

                        {/* Certification Icon */}

                        <div
                          className={`
                            relative
                            w-20
                            h-20
                            rounded-2xl
                            bg-gradient-to-br
                            ${cert.gradient}
                            flex
                            items-center
                            justify-center
                            mb-6
                            shadow-lg
                            float-3d
                          `}
                        >

                          <div
                            className="
                              absolute
                              inset-0
                              rounded-2xl
                              bg-white/10
                            "
                          />

                          <IconComponent
                            className="
                              relative
                              z-10
                              w-10
                              h-10
                              text-white
                              icon-3d
                            "
                          />

                        </div>

                        {/* Title */}

                        <h3
                          className="
                            relative
                            z-10
                            text-base
                            sm:text-lg
                            md:text-xl
                            font-bold
                            leading-snug
                            break-words
                            text-primary
                            float-3d
                          "
                        >
                          {cert.title}
                        </h3>

                        <p className="relative z-10 mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground md:hidden">
                          Tap to view
                        </p>

                      </div>

                      {/* ===============================================
                          BACK FACE
                      =============================================== */}

                      <div
                        className="
                          absolute
                          inset-0
                          [backface-visibility:hidden]
                          [transform:rotateY(180deg)]
                          block
                          h-full
                          overflow-hidden
                          rounded-3xl
                          border
                          border-primary/50
                          bg-card
                          text-card-foreground
                          p-6
                          premium-glass-3d
                          flex
                          flex-col
                          items-center
                          justify-center
                          text-center
                          shadow-2xl
                        "
                      >

                        {/* Full Gradient Background */}

                        <div
                          className={`
                            absolute
                            inset-0
                            bg-gradient-to-br
                            ${cert.gradient}
                            opacity-15
                          `}
                        />

                        {/* Decorative Circle */}

                        <div
                          className="
                            absolute
                            -top-10
                            -right-10
                            w-32
                            h-32
                            rounded-full
                            bg-white/5
                            blur-2xl
                          "
                        />

                        <div
                          className="
                            absolute
                            -bottom-10
                            -left-10
                            w-32
                            h-32
                            rounded-full
                            bg-primary/10
                            blur-2xl
                          "
                        />

                        {/* Back Content */}

                        <div
                          className="
                            relative
                            z-10
                            flex
                            flex-col
                            items-center
                            float-3d
                          "
                        >

                          {/* Award Icon */}

                          <div
                            className="
                              w-16
                              h-16
                              rounded-2xl
                              bg-primary/10
                              border
                              border-primary/20
                              flex
                              items-center
                              justify-center
                              mb-5
                            "
                          >

                            <FiAward
                              className="
                                w-10
                                h-10
                                text-primary
                                icon-3d
                              "
                            />

                          </div>

                          <h3
                            className="
                              text-lg
                              font-bold
                              text-foreground
                              mb-3
                            "
                          >
                            Verified Credential
                          </h3>

                          <p
                            className="
                              text-muted-foreground
                              font-medium
                              mb-5
                            "
                          >
                            Issued by{' '}
                            <span
                              className="
                                text-primary
                                font-semibold
                              "
                            >
                              {cert.issuer}
                            </span>
                          </p>

                          {/* Verification Status */}

                          <div
                            className="
                              inline-flex
                              items-center
                              gap-2
                              px-4
                              py-2
                              rounded-full
                              border
                              border-primary/20
                              bg-primary/5
                              text-primary
                              text-xs
                              font-semibold
                            "
                          >

                            <FiCheckCircle
                              className="w-4 h-4"
                            />

                            Professional Credential

                          </div>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                </Tilt>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
};

export default Certifications;