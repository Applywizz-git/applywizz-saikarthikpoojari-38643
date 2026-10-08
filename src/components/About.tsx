import { motion } from 'framer-motion';

import {
  FiLayers,
  FiUsers,
  FiPackage,
  FiTruck,
  FiBarChart2,
  FiDatabase,
  FiArrowUpRight,
  FiCheckCircle,
} from 'react-icons/fi';

import { Tilt } from './ui/Tilt';

/* =========================================================
   ABOUT — CORE EXPERTISE
========================================================= */

const expertiseItems = [
  {
    icon: FiLayers,
    number: '01',
    title: 'ServiceNow Development',
    subtitle: 'Platform • Custom Apps',
    description:
      'Built enterprise ServiceNow solutions using JavaScript, Glide APIs, Business Rules, Script Includes, Client Scripts, UI Actions, and scoped applications.',
    tags: ['Glide APIs', 'Business Rules', 'Scoped Apps'],
  },

  {
    icon: FiUsers,
    number: '02',
    title: 'ITSM & Service Delivery',
    subtitle: 'Incident • Change',
    description:
      'Designed and supported Incident, Problem, Change, Request, and Service Catalog workflows to improve routing accuracy and service continuity.',
    tags: ['ITSM', 'SLA', 'Catalog'],
  },

  {
    icon: FiPackage,
    number: '03',
    title: 'ITOM & CMDB',
    subtitle: 'Discovery • CI Data',
    description:
      'Modeled infrastructure and service relationships through Discovery, MID Server, CI Relationships, and CMDB controls to strengthen operational visibility.',
    tags: ['Discovery', 'CMDB', 'CI Relationships'],
  },

  {
    icon: FiTruck,
    number: '04',
    title: 'Workflow & Integrations',
    subtitle: 'Flow Designer • REST',
    description:
      'Connected ServiceNow with enterprise systems using Flow Designer, Integration Hub, REST APIs, Scripted REST APIs, OAuth, and secure data exchange.',
    tags: ['Flow Designer', 'REST', 'OAuth'],
  },

  {
    icon: FiBarChart2,
    number: '05',
    title: 'User Experience',
    subtitle: 'UI Builder • Service Portal',
    description:
      'Created role-based service experiences with UI Builder, Now Experience Framework, Service Portal, and Configurable Workspaces for a better agent journey.',
    tags: ['UI Builder', 'Service Portal', 'Workspaces'],
  },

  {
    icon: FiDatabase,
    number: '06',
    title: 'AI & Platform Engineering',
    subtitle: 'Now Assist • Security',
    description:
      'Introduced AI-assisted service operations and secure platform practices with Now Assist, Virtual Agent, ACLs, platform security, and release governance.',
    tags: ['Now Assist', 'ACLs', 'Platform Security'],
  },
];

/* =========================================================
   IMPACT METRICS
========================================================= */

const impactMetrics = [
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
];

/* =========================================================
   EXPERTISE CARD
========================================================= */

const ExpertiseCard = ({
  item,
  index,
}: {
  item: (typeof expertiseItems)[number];
  index: number;
}) => {
  const Icon = item.icon;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      className="h-full"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.45,
          delay: index * 0.06,
        }}
        whileHover={{
          y: -6,
        }}
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-2xl
          glass-card
          premium-glass-3d
          card-3d
          hover-3d-lift
          interactive-glow
          preserve-3d
          p-5
          transition-all
          duration-300
          cursor-pointer
        "
      >
        {/* Background glow */}

        <div
          className="
            absolute
            -top-16
            -right-16
            w-36
            h-36
            rounded-full
            bg-primary/10
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
          "
        />

        {/* Top line */}

        <div
          className="
            absolute
            top-0
            left-5
            right-5
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/40
            to-transparent
            opacity-40
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />

        {/* Header */}

        <div
          className="
            relative
            z-10
            flex
            items-start
            justify-between
            mb-4
          "
        >
          <div
            className="
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              bg-primary/10
              border
              border-primary/20
              text-primary
              icon-3d
              group-hover:scale-110
              group-hover:rotate-3
              transition-all
              duration-300
            "
          >
            <Icon className="w-5 h-5" />
          </div>

          <span
            className="
              text-[10px]
              font-mono
              text-muted-foreground/30
              group-hover:text-primary/50
              transition-colors
            "
          >
            {item.number}
          </span>
        </div>

        {/* Title */}

        <div className="relative z-10 mb-3">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-primary
              font-medium
              mb-1
            "
          >
            {item.subtitle}
          </p>

          <h3
            className="
              text-lg
              md:text-xl
              font-display
              font-bold
              text-foreground
              group-hover:text-primary
              transition-colors
              duration-300
            "
          >
            {item.title}
          </h3>
        </div>

        {/* Description */}

        <p
          className="
            relative
            z-10
            text-xs
            md:text-sm
            leading-relaxed
            text-muted-foreground
            mb-4
          "
        >
          {item.description}
        </p>

        {/* Tags */}

        <div
          className="
            relative
            z-10
            flex
            flex-wrap
            gap-1.5
          "
        >
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-2
                py-1
                rounded-md
                text-[9px]
                md:text-[10px]
                font-medium
                bg-muted/50
                border
                border-border/40
                text-muted-foreground
                group-hover:border-primary/20
                group-hover:text-primary
                transition-all
                duration-200
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}

        <div
          className="
            absolute
            bottom-4
            right-4
            w-7
            h-7
            rounded-full
            border
            border-border/40
            flex
            items-center
            justify-center
            opacity-0
            translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
          "
        >
          <FiArrowUpRight className="w-3.5 h-3.5 text-primary" />
        </div>

        {/* Bottom accent */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-gradient-to-r
            from-primary
            to-secondary
            group-hover:w-full
            transition-all
            duration-500
          "
        />
      </motion.div>
    </Tilt>
  );
};

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-14
        md:py-20
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[40%]
          h-[40%]
          bg-gradient-radial
          from-primary/8
          to-transparent
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[35%]
          h-[35%]
          bg-gradient-radial
          from-secondary/8
          to-transparent
          blur-3xl
          pointer-events-none
        "
      />

      {/* Subtle grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          pointer-events-none
          bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

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
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            text-left
            mb-10
            md:mb-12
            max-w-3xl
          "
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              border
              border-primary/20
              bg-primary/5
              text-primary
              text-xs
              font-medium
              mb-4
            "
          >
            <FiPackage className="w-3.5 h-3.5" />

            About Me
          </motion.span>

          <motion.h2
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
              duration: 0.5,
              delay: 0.05,
            }}
            className="
              text-3xl
              md:text-5xl
              font-display
              font-bold
              mb-4
              fx-fold
            "
          >
            <span className="split-text-primary">Who</span>{' '}
            <span className="split-text-primary">I</span>{' '}
            <span className="split-text-secondary">Am</span>
          </motion.h2>

          <motion.p
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
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              max-w-3xl
              text-sm
              md:text-base
              leading-relaxed
              text-muted-foreground
            "
          >
            Senior ServiceNow Developer with{' '}
            <span className="text-primary font-semibold">
              7+ years
            </span>{' '}
            of IT experience, including 4+ years of
            enterprise platform delivery across higher
            education, healthcare, and consulting
            environments.
          </motion.p>
        </div>

        {/* =================================================
            INTRO + IMPACT
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
            duration: 0.5,
          }}
          className="
            grid
            lg:grid-cols-[0.85fr_1.35fr]
            gap-5
            mb-10
            items-stretch
          "
        >
          {/* Main introduction */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              glass-card
              premium-glass-3d
              card-3d
              p-6
              md:p-7
              lg:order-2
            "
          >
            <div
              className="
                absolute
                top-0
                right-0
                w-40
                h-40
                bg-primary/8
                blur-3xl
                rounded-full
                pointer-events-none
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  mb-4
                "
              >
                <FiCheckCircle
                  className="
                    w-4
                    h-4
                    text-primary
                  "
                />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-primary
                    font-medium
                  "
                >
                  Professional Profile
                </span>
              </div>

              <p
                className="
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-foreground
                "
              >
                I design and support ServiceNow solutions that
                connect business requirements to reliable
                platform functionality across ITSM, HRSD,
                CMDB, integrations, and AI-assisted service
                operations. My work spans{' '}
                <span className="text-primary font-semibold">
                  enterprise workflow automation, platform
                  configuration, and production support
                </span>{' '}
                across higher education, healthcare, and
                consulting environments.
              </p>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                  mt-4
                "
              >
                I collaborate closely with business teams,
                architects, administrators, and support groups
                to turn operating needs into secure,
                maintainable ServiceNow experiences and
                intelligent automation.
              </p>
            </div>
          </div>

          {/* Impact metrics */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              lg:order-1
            "
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  glass-card
                  premium-glass-3d
                  p-4
                  md:p-5
                  flex
                  flex-col
                  justify-center
                  text-center
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-primary/5
                    to-secondary/5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    text-2xl
                    md:text-3xl
                    font-black
                    text-primary
                  "
                >
                  {metric.value}
                </div>

                <div
                  className="
                    relative
                    z-10
                    text-[9px]
                    md:text-[10px]
                    uppercase
                    tracking-wider
                    font-bold
                    text-muted-foreground
                    mt-1
                  "
                >
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            CORE EXPERTISE
        ================================================= */}

        <div>
          <div
            className="
              flex
              items-center
              justify-between
              mb-5
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-secondary
                  font-medium
                  mb-1
                "
              >
                What I Do
              </p>

              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-display
                  font-bold
                  text-foreground
                "
              >
                Core Expertise
              </h3>
            </div>

            <span
              className="
                hidden
                sm:block
                text-xs
                text-muted-foreground
              "
            >
              6 ServiceNow Areas
            </span>
          </div>

          {/* =================================================
              EXPERTISE GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-6
              gap-4
              items-stretch
            "
          >
            {expertiseItems.map((item, index) => (
              <div
                key={item.title}
                className={`min-h-[180px] sm:min-h-[220px] ${
                  index === 0 || index === 3
                    ? 'lg:col-span-4'
                    : index === 4 || index === 5
                      ? 'lg:col-span-3'
                      : 'lg:col-span-2'
                }`}
              >
                <ExpertiseCard
                  item={item}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM IDENTITY LINE
        ================================================= */}

        <motion.div
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
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-7
            flex
            flex-wrap
            justify-center
            items-center
            gap-x-4
            gap-y-2
            text-xs
            text-muted-foreground
          "
        >
          <span>ServiceNow</span>

          <span className="text-primary/40">•</span>

          <span>ITSM</span>

          <span className="text-primary/40">•</span>

          <span>HRSD</span>

          <span className="text-primary/40">•</span>

          <span>Integrations</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;