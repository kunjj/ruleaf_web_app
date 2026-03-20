import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

const LeafIcon = ({ className }: { className?: string }) => <img src="/android-chrome-192x192.png" alt="" className={className} />;

const team = [
  { name: "Eleanor Whitfield", title: "Managing Director" },
  { name: "Thomas Greenwood", title: "Head of Design" },
  { name: "Priya Sharma", title: "Head of Horticulture" },
  { name: "Marcus O'Brien", title: "Operations Manager" },
];

const milestones = [
  { year: "2024", title: "Concept", desc: "Ruleaf was formed to deliver premium plant experiences for modern workplaces." },
  { year: "2025", title: "Pilot Projects", desc: "We launched pilot installations and built a service model around speed, quality, and care." },
  { year: "2025", title: "Service Model", desc: "Our operations expanded to recurring maintenance, replacements, and responsive support." },
  { year: "2026", title: "Scale Across Cities", desc: "We are growing nationally with a focus on reliable delivery and measurable workplace impact." },
  { year: "Now", title: "Demo & Launch", desc: "This platform showcases the Ruleaf experience as we onboard new commercial partners." },
];

const states = [
  { abbr: "WA", position: "top-[58%] left-[18%]", active: true },
  { abbr: "NT", position: "top-[38%] left-[43%]", active: false },
  { abbr: "SA", position: "top-[58%] left-[47%]", active: true },
  { abbr: "QLD", position: "top-[38%] left-[71%]", active: true },
  { abbr: "NSW", position: "top-[58%] left-[74%]", active: true },
  { abbr: "VIC", position: "top-[70%] left-[69%]", active: true },
  { abbr: "TAS", position: "top-[84%] left-[72%]", active: false },
  { abbr: "ACT", position: "top-[63%] left-[78%]", active: true },
];

const About = () => (
  <main className="pt-24 pb-16 min-h-screen bg-background">
    <div className="container mx-auto px-4">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <LeafIcon className="w-4 h-4" />Proven delivery mindset.
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Building Better-spaces with Plants
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ruleaf is a new-generation plant service focused on spaces that you live in.
          We combine practical horticultural care with clean, modern design to create healthier and more productive environments.
        </p>
      </motion.div>

      {/* Team */}
      <section className="mb-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Our Leadership</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-warm p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: LeafIcon, title: "Sustainability", desc: "Every decision we make prioritises environmental impact. We source locally, use organic practices, and offset our carbon footprint." },
            { icon: Award, title: "Expertise", desc: "Our team includes certified horticulturists, biophilic designers, and GBCA accredited consultants focused on practical outcomes." },
            { icon: Users, title: "Service", desc: "Dedicated account managers, 24-hour replacement guarantees, and a commitment to exceeding expectations on every project." },
          ].map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GBCA Badge */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="bg-primary/5 rounded-2xl p-8 text-center max-w-2xl mx-auto mb-24 border border-border">
        <Award className="w-10 h-10 text-accent mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-foreground mb-2">GBCA Accredited Partner</h3>
        <p className="text-sm text-muted-foreground">We help commercial properties earn Green Star IEQ-15  environment quality credits through strategic biophilic design and  plantscaping.</p>
      </motion.div>

      {/* Map */}
      <section className="mb-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Australia-Wide Coverage</motion.h2>
        <div className="relative w-full max-w-lg mx-auto aspect-[4/3] bg-card rounded-2xl border border-border shadow-warm p-4 sm:p-6">
          <svg viewBox="0 0 420 300" className="absolute inset-0 w-full h-full p-5 text-primary/10" aria-hidden="true" fill="currentColor">
            <path d="M60 190L78 165L95 146L92 124L112 104L140 92L175 94L208 78L243 86L274 74L304 86L326 112L348 110L364 130L356 158L342 178L320 186L308 202L286 210L270 228L242 230L224 244L190 238L166 248L140 242L122 226L104 224L90 206L76 208Z" />
            <path d="M303 248L320 252L327 266L317 275L300 270L295 258Z" />
          </svg>
          {states.map((s) => (
            <div key={s.abbr} className={`absolute font-mono text-xs font-bold ${s.position}`}>
              <span className={s.active ? "bg-accent/20 text-accent px-2 py-1 rounded" : "text-muted-foreground"}>
                {s.abbr}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Our Journey</motion.h2>
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-accent">{m.year}</span>
                </div>
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-foreground">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default About;
