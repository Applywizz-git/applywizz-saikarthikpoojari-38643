import { motion } from 'framer-motion';

import {
  FiSettings,
  FiLayers,
  FiUsers,
  FiPackage,
  FiTruck,
  FiBarChart2,
  FiDatabase,
  FiGrid,
  FiMessageSquare,
} from 'react-icons/fi';

import { Tilt } from './ui/Tilt';

/* =========================================================
   TECHNICAL SKILLS
========================================================= */

const skillCategories = [
  {
    title: 'ServiceNow Development',
    icon: FiLayers,
    accent: 'primary',
    skills: [
      'ServiceNow Platform',
      'JavaScript',
      'Glide APIs',
      'GlideRecord',
      'GlideAjax',
      'GlideSystem',
      'Business Rules',
      'Script Includes',
      'Client Scripts',
      'UI Actions',
      'UI Policies',
      'Data Policies',
      'ACLs',
      'Custom Tables',
      'Scoped Applications',
      'App Engine Studio',
      'ServiceNow Studio',
    ],
  },
  {
    title: 'ITSM & Service Delivery',
    icon: FiUsers,
    accent: 'teal',
    skills: [
      'ITIL Processes',
      'Incident Management',
      'Problem Management',
      'Change Management',
      'Request Management',
      'Service Catalog',
      'Record Producers',
      'Knowledge Management',
      'SLA Management',
      'Service Operations Workspace',
    ],
  },
  {
    title: 'ITOM & CMDB',
    icon: FiTruck,
    accent: 'teal',
    skills: [
      'ITOM Visibility',
      'Discovery',
      'Service Mapping',
      'Event Management',
      'CMDB',
      'CSDM',
      'IRE',
      'MID Server',
      'Transform Maps',
      'Import Sets',
      'Scheduled Imports',
      'CI Relationships',
      'Alert Management',
    ],
  },
  {
    title: 'Workflow & Integrations',
    icon: FiBarChart2,
    accent: 'graphite',
    skills: [
      'Flow Designer',
      'Integration Hub',
      'IntegrationHub Spokes',
      'Process Automation Designer',
      'REST APIs',
      'Scripted REST APIs',
      'SOAP APIs',
      'Table API',
      'JDBC',
      'OAuth 2.0',
      'SAML/SSO',
      'JSON',
      'XML',
    ],
  },
  {
    title: 'ServiceNow Applications',
    icon: FiPackage,
    accent: 'maroon',
    skills: [
      'HRSD',
      'ITAM',
      'Hardware Asset Management',
      'Software Asset Management',
      'CSM',
      'GRC/IRM',
      'Security Operations',
      'Vulnerability Response',
      'Employee Center',
      'HR Agent Workspace',
    ],
  },
  {
    title: 'User Experience',
    icon: FiDatabase,
    accent: 'primary',
    skills: [
      'UI Builder',
      'Now Experience Framework',
      'Configurable Workspaces',
      'Service Portal',
      'Service Portal Widgets',
      'HTML5',
      'CSS3',
      'AJAX',
    ],
  },
  {
    title: 'Software Development',
    icon: FiMessageSquare,
    accent: 'teal',
    skills: [
      'Java',
      'J2EE',
      'SQL',
      'JDBC',
      'JSP',
      'Servlets',
      'JUnit',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'AI & Intelligent Operations',
    icon: FiGrid,
    accent: 'primary',
    skills: [
      'Now Assist',
      'Virtual Agent',
      'Predictive Intelligence',
      'ITOM AIOps',
      'Event Correlation',
      'Anomaly Detection',
    ],
  },
  {
    title: 'Platform, Release & Delivery',
    icon: FiSettings,
    accent: 'graphite',
    skills: [
      'Update Sets',
      'Instance Upgrades',
      'Platform Security',
      'Edge Encryption',
      'GitHub',
      'Jenkins',
      'Azure DevOps',
      'CI/CD',
      'Debugging',
      'Performance Optimization',
      'Production Support',
      'Agile/Scrum',
    ],
  },
];

/* =========================================================
   ACCENT STYLES
========================================================= */

const accentStyles = {
  primary: {
    icon: 'text-primary',
    iconBg: 'bg-primary/10',
    border: 'border-primary/20',
    glow: 'from-primary/10',
    badge: 'text-primary',
  },

  teal: {
    icon: 'text-secondary',
    iconBg: 'bg-secondary/10',
    border: 'border-secondary/20',
    glow: 'from-secondary/10',
    badge: 'text-secondary',
  },

  maroon: {
    icon: 'text-primary',
    iconBg: 'bg-primary/10',
    border: 'border-primary/20',
    glow: 'from-primary/10',
    badge: 'text-primary',
  },

  graphite: {
    icon: 'text-foreground',
    iconBg: 'bg-muted',
    border: 'border-border/60',
    glow: 'from-muted',
    badge: 'text-muted-foreground',
  },

  'maroon-teal': {
    icon: 'text-primary',
    iconBg: 'bg-primary/10',
    border: 'border-primary/20',
    glow: 'from-primary/10',
    badge: 'text-primary',
  },
};

/* =========================================================
   SKILL CATEGORY CARD
========================================================= */

const SkillCategory = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) => {
  const Icon = category.icon;

  const styles =
    accentStyles[
    category.accent as keyof typeof accentStyles
    ];

  return (
    <Tilt>
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
          delay: index * 0.04,
          ease: 'easeOut',
        }}
        whileHover={{
          y: -5,
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
          p-4
          md:p-5
          transition-all
          duration-300
        "
      >
        {/* ===============================================
            SOFT BACKGROUND GLOW
        =============================================== */}

        <div
          className={`
            absolute
            -top-20
            -right-20
            w-36
            h-36
            rounded-full
            bg-gradient-radial
            ${styles.glow}
            to-transparent
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
          `}
        />

        {/* ===============================================
            TOP ACCENT LINE
        =============================================== */}

        <div
          className="
            absolute
            top-0
            left-6
            right-6
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/30
            to-transparent
            opacity-40
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />

        {/* ===============================================
            HEADER
        =============================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
            gap-3
            mb-4
          "
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                ${styles.iconBg}
                ${styles.icon}
                border
                ${styles.border}
                shrink-0
                icon-3d
                group-hover:scale-105
                group-hover:rotate-2
                transition-all
                duration-300
              `}
            >
              <Icon className="w-5 h-5" />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  text-sm
                  md:text-base
                  font-display
                  font-bold
                  text-foreground
                  leading-tight
                  break-words
                "
              >
                {category.title}
              </h3>

              <p
                className={`
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  font-medium
                  ${styles.badge}
                  opacity-70
                `}
              >
                {category.skills.length} Skills
              </p>
            </div>
          </div>

          {/* Category number */}

          <span
            className="
              text-xs
              font-mono
              text-muted-foreground/30
              group-hover:text-primary/40
              transition-colors
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* ===============================================
            SKILLS
        =============================================== */}

        <div
          className="
            relative
            z-10
            flex
            flex-wrap
            gap-1.5
          "
        >
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={`${category.title}-${skill}`}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.2,
                delay:
                  index * 0.03 +
                  skillIndex * 0.008,
              }}
              whileHover={{
                y: -2,
                scale: 1.025,
              }}
              className="
                inline-flex
                items-center
                px-2.5
                py-1.5
                rounded-lg
                bg-muted/50
                border
                border-border/40
                text-[10px]
                md:text-[11px]
                font-medium
                text-muted-foreground
                hover:text-primary
                hover:bg-primary/5
                hover:border-primary/25
                transition-all
                duration-200
                cursor-default
                whitespace-nowrap
              "
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* ===============================================
            BOTTOM SHINE
        =============================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-0
            h-[2px]
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
   MAIN SKILLS SECTION
========================================================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-12
        md:py-20
        bg-transparent
      "
    >
      {/* ===============================================
          BACKGROUND GLOWS
      =============================================== */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[35%]
          h-[35%]
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
          w-[30%]
          h-[30%]
          bg-gradient-radial
          from-secondary/8
          to-transparent
          blur-3xl
          pointer-events-none
        "
      />

      {/* ===============================================
          CONTAINER
      =============================================== */}

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
        {/* =============================================
            HEADER
        ============================================= */}

        <div
          className="
            text-left
            mb-9
            md:mb-12
            max-w-3xl
          "
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              glass-card
              text-primary
              text-xs
              font-medium
              mb-3
            "
          >
            <FiSettings className="w-3.5 h-3.5" />

            Technical Expertise
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
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
            className="section-heading fx-split"
          >
            <span className="split-text-primary">
              Skills
            </span>{' '}
            <span className="split-text-secondary">
              & Competencies
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
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
              delay: 0.08,
            }}
            className="
              section-subheading
              max-w-2xl
              mt-3
            "
          >
            ServiceNow development, workflow automation,
            CMDB visibility, integrations, HRSD, and
            enterprise platform delivery.
          </motion.p>
        </div>

        {/* =============================================
            SKILL MATRIX
        ============================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-4
            md:gap-6
            items-start
          "
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={index % 2 === 1 ? 'lg:mt-10' : ''}
            >
              <SkillCategory
                category={category}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* =============================================
            COMPACT FOOTER
        ============================================= */}

        <motion.div
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
          }}
          className="
            mt-6
            md:mt-8
            flex
            flex-wrap
            items-center
            justify-start
            gap-x-5
            gap-y-2
            text-xs
            text-muted-foreground
          "
        >
          <span className="flex items-center gap-1.5">
            <FiDatabase className="text-primary" />
            ServiceNow
          </span>

          <span className="flex items-center gap-1.5">
            <FiGrid className="text-secondary" />
            Flow Designer
          </span>

          <span className="flex items-center gap-1.5">
            <FiBarChart2 className="text-primary" />
            JavaScript
          </span>

          <span className="flex items-center gap-1.5">
            <FiPackage className="text-primary" />
            CMDB
          </span>

          <span className="flex items-center gap-1.5">
            <FiTruck className="text-secondary" />
            HRSD
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;