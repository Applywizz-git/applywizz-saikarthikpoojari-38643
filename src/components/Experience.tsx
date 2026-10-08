import { motion } from 'framer-motion';
import { FiCalendar, FiCheckCircle, FiMapPin } from 'react-icons/fi';

import { experienceData } from '@/data/experience';

const Experience = () => (
  <section
    id="experience"
    className="relative overflow-hidden bg-transparent py-20 md:py-32"
  >
    <div
      className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl"
      aria-hidden="true"
    />

    <div className="container relative z-10 mx-auto px-4 md:px-8">
      <div className="mb-12 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
        >
          Career Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-5 text-4xl font-bold md:text-5xl"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="max-w-3xl text-lg leading-relaxed text-muted-foreground"
        >
          Building dependable service workflows and enterprise applications,
          from Java development to modern ServiceNow platforms.
        </motion.p>
      </div>

      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`glass-card group ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${experience.gradient}`} />

            <div className="p-5 sm:p-7 lg:p-8">
              <div className="min-w-0">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
                    0{index + 1}
                  </span>
                  <span className={`rounded-full bg-gradient-to-r ${experience.gradient} px-3 py-1 text-xs font-semibold text-slate-950`}>
                    {experience.company}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {experience.role}
                </h3>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <FiCalendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    {experience.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FiMapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
                    {experience.location}
                  </span>
                </div>
              </div>

              <div className="my-6 border-t border-border/70" />

              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Highlights &amp; impact
              </h4>
              <ul className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <FiCheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
