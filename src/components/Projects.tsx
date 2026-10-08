import { motion } from 'framer-motion';
import { FiActivity, FiCheckCircle, FiCpu, FiLayers } from 'react-icons/fi';

const projectsData = [
  {
    title: 'AI-Augmented ServiceNow ITSM Operations Platform',
    tools: ['Virtual Agent', 'Now Assist', 'Predictive Intelligence', 'Flow Designer', 'Integration Hub'],
    icon: FiCpu,
    accent: '#087f9c',
    accentSoft: 'rgba(8,127,156,0.12)',
    category: 'ITSM & AI Operations',
    highlights: [
      'Configured Virtual Agent, Now Assist, and Predictive Intelligence to classify requests, surface relevant knowledge, and summarize incidents, helping service teams handle routine interactions with less manual review.',
      'Orchestrated Flow Designer workflows around category, priority, assignment group, and CI data, routing AI-assisted recommendations through governed approvals before actions reached Incident and Request processes.',
      'Enriched service records through REST APIs and Integration Hub, bringing user, asset, and application context into tickets so agents received more complete information before investigation and assignment.',
    ],
  },
  {
    title: 'Intelligent ITOM, AIOps & CMDB Service Visibility',
    tools: ['Discovery', 'Service Mapping', 'CSDM', 'ITOM AIOps', 'IRE'],
    icon: FiActivity,
    accent: '#16835d',
    accentSoft: 'rgba(22,131,93,0.12)',
    category: 'ITOM & CMDB',
    highlights: [
      'Modeled application services with Discovery, Service Mapping, CSDM, CMDB, and CI Relationships, giving operations teams clearer visibility into infrastructure dependencies and potential downstream service impact.',
      'Correlated Event Management alerts with ITOM AIOps and CMDB data, grouping related conditions around affected CIs so support teams could focus on actionable events instead of isolated monitoring signals.',
      'Reconciled discovered infrastructure through MID Server, IRE, and CMDB controls, keeping service relationships consistent and strengthening the configuration data used for incident analysis and operational decisions.',
    ],
  },
  {
    title: 'Enterprise ServiceNow Integration & Application Engineering',
    tools: ['App Engine Studio', 'Integration Hub', 'UI Builder', 'REST APIs', 'CI/CD'],
    icon: FiLayers,
    accent: '#a35c08',
    accentSoft: 'rgba(163,92,8,0.12)',
    category: 'Platform Engineering',
    highlights: [
      'Constructed a scoped application in App Engine Studio using custom tables, Script Includes, Business Rules, ACLs, and Flow Designer, turning a multi-step business process into a controlled ServiceNow application.',
      'Connected inbound and outbound workflows through Integration Hub, REST APIs, OAuth 2.0, JSON, and reusable actions, enabling secure data exchange while keeping integration logic maintainable inside the platform.',
      'Delivered role-based pages with UI Builder, Now Experience Framework, JavaScript, and Glide APIs, then promoted changes through GitHub and CI/CD practices to keep application releases consistent across environments.',
    ],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectsData)[number];
  index: number;
}) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="project-card group"
    >
      <div
        className="project-card-glow"
        style={{
          background: `radial-gradient(circle at 18% 0%, ${project.accentSoft}, transparent 58%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      <div className="relative flex h-full flex-col gap-6 p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{
              background: `linear-gradient(160deg, ${project.accent}, ${project.accent}bb)`,
              boxShadow: `0 10px 24px ${project.accentSoft}`,
            }}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            0{index + 1}
          </span>
        </div>

        <div className="min-w-0">
          <span
            className="mb-4 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{
              color: project.accent,
              background: project.accentSoft,
              border: `1px solid ${project.accent}40`,
            }}
          >
            {project.category}
          </span>
          <h3 className="max-w-full break-words font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-foreground md:text-2xl">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="project-chip">
              {tool}
            </span>
          ))}
        </div>

        <ul className="grid gap-4 border-t border-border/70 pt-5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <FiCheckCircle
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: project.accent }}
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent py-16 md:py-28"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mb-12 max-w-3xl text-left md:mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Featured Work
          </span>
          <h2 className="section-heading fx-blur">
            <span className="split-text-primary">Selected</span>{' '}
            <span className="split-text-secondary">Projects</span>
          </h2>
          <p className="section-subheading max-w-3xl">
            Enterprise ServiceNow work focused on workflow automation, service operations, CMDB visibility, and platform-scale digital experiences.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={index === 1 ? 'lg:mt-12' : ''}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
