export interface ExperienceRecord {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  gradient: string;
  responsibilities: string[];
}

export const experienceData: ExperienceRecord[] = [
  {
    id: 1,
    role: 'ServiceNow Developer',
    company: 'University of Southern California',
    location: 'Los Angeles, CA',
    duration: 'Aug 2024 – Present',
    gradient: 'from-cyan-400 to-teal-400',
    responsibilities: [
      'Built ServiceNow ITSM workflows for Incident, Problem, Change, and Request Management across a 45,000+ user university environment, using Business Rules, Script Includes, Client Scripts, Glide APIs, and SLA logic to strengthen routing accuracy and keep campus support work moving through defined ownership paths.',
      'Streamlined Service Catalog fulfillment for 10+ university departments with catalog items, Record Producers, Flow Designer, approval rules, notifications, and reusable variable sets, shifting request handling from scattered manual steps into consistent self-service workflows.',
      'Coordinated HR onboarding and offboarding through HRSD, Employee Center, HR Agent Workspace, Process Automation Designer, and Flow Designer, connecting HR, IT, Facilities, access provisioning, and equipment tasks so lifecycle activities progressed without repeated follow-up between teams.',
      'Created role-based service experiences with UI Builder, Now Experience Framework, Configurable Workspaces, Service Portal, HTML5, CSS3, and AJAX, giving agents and managers a clearer way to manage cases, approvals, employee information, and knowledge from a unified workspace.',
      'Established ITAM and CMDB processes for 10,000+ on-premises and cloud-managed assets using Discovery, MID Server, Import Sets, Transform Maps, Scheduled Imports, IRE, and CI Relationships, increasing confidence in asset and configuration data used by Incident, Change, and Request workflows.',
      'Configured GRC/IRM workflows around 3 regulatory and governance frameworks including FERPA, HIPAA, and NIST, applying ACLs, Platform Security, scoped applications, attestations, evidence collection, and remediation tasks to give risk owners clearer accountability and audit traceability.',
      'Connected ServiceNow with enterprise and cloud platforms through Integration Hub, MID Server, REST APIs, JSON, and secure authentication, enabling governed data exchange across campus systems and keeping operational records aligned without repeated manual updates.',
      'Introduced AI-assisted service operations with Now Assist, Virtual Agent, Predictive Intelligence, ITOM AIOps, and Event Correlation, helping campus support teams classify incidents, surface knowledge, summarize case activity, and analyze service conditions while retaining human review for controlled decisions.',
    ],
  },
  {
    id: 2,
    role: 'ServiceNow Developer',
    company: 'FTI Consulting',
    location: 'Texas',
    duration: 'May 2022 – Jul 2024',
    gradient: 'from-sky-400 to-cyan-500',
    responsibilities: [
      'Reworked healthcare ITSM processes with Business Rules, Script Includes, Client Scripts, UI Actions, and SLA Management, cutting average Incident, Problem, Change, and Request resolution time by 18% across hospital support operations.',
      'Simplified Service Catalog intake for clinical users through Record Producers, UI Policies, Data Policies, Flow Designer, and approval routing, lowering incomplete and misclassified requests by 24% and helping support teams begin fulfillment with cleaner data.',
      'Linked ServiceNow with healthcare applications through 8 REST and Scripted REST API integrations, applying JSON, OAuth 2.0, and validation logic to keep case and operational data synchronized while eliminating repeated entry across clinical support systems.',
      'Centralized internal and patient-support case handling with CSM, SLA Management, Service Portal, and Configurable Workspaces, giving support teams clearer ownership, escalation paths, and end-to-end visibility from intake through closure.',
      'Redesigned support interfaces through Service Portal, Configurable Workspaces, HTML5, CSS3, and AJAX, giving clinical teams faster access to cases, knowledge, tasks, and service status while simplifying day-to-day healthcare support navigation.',
      'Accelerated vulnerability triage through Security Operations, Vulnerability Response, Integration Hub, REST APIs, ACLs, and Platform Security, shortening assignment and remediation coordination by 20% while preserving controlled access to sensitive operational data.',
      'Mapped servers, network devices, and application dependencies through Discovery, MID Server, Scheduled Imports, and CI Relationships, giving Incident and Change teams clearer infrastructure context for impact analysis, troubleshooting, and healthcare production support.',
      'Stabilized production releases by debugging scoped applications, Business Rules, Client Scripts, Service Catalog workflows, integrations, and ACLs, preventing recurring defects and helping QA, developers, and healthcare stakeholders move validated fixes into production.',
    ],
  },
  {
    id: 3,
    role: 'Java Application Developer',
    company: 'SS Info Tech',
    location: 'India',
    duration: 'Feb 2018 – Jul 2021',
    gradient: 'from-teal-400 to-emerald-500',
    responsibilities: [
      'Developed enterprise web modules with Java, J2EE, JSP, Servlets, and JavaBeans, delivering 20+ reusable components that kept business logic consistent and made future enhancements easier to support.',
      'Reworked Struts-based application layers using MVC, DAO, and Singleton patterns, cutting duplicate code by 16% and giving the team a cleaner structure for extending backend and presentation features.',
      'Tuned JDBC data-access classes and Oracle SQL queries for record retrieval, updates, and transactional processing, helping application screens return data faster while keeping database operations stable.',
      'Built browser-based forms with JSP, HTML, CSS, JavaScript, and client-side validation, boosting input accuracy and giving business users a smoother experience before data reached server-side processing.',
      'Validated Java components through JUnit, regression testing, system testing, and UAT support, completing 40+ functional scenarios that caught defects earlier and helped the team deliver more dependable production releases.',
      'Streamlined compilation, packaging, and Jetty deployment through ANT build scripts and XML configuration, cutting repetitive release effort by 25% and making deployments more consistent across environments.',
      'Traced application and integration defects with Log4j, Java exception handling, browser debugging, and runtime logs, speeding root-cause analysis and helping the support team close production issues with fewer repeat incidents.',
      'Translated functional requirements with analysts, testers, database developers, and business users across the Waterfall SDLC, turning business needs into Java backend logic, frontend behavior, database changes, and production-ready releases.',
    ],
  },
];
