import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplets, AlertTriangle } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

const LeafIcon = ({ className }: { className?: string }) => <img src="/android-chrome-192x192.png" alt="" className={className} />;

const HeroSection = ({ onOpenQuote }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
    <div className="absolute top-20 right-10 w-72 h-72 bg-green-light/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <LeafIcon className="w-4 h-4" />Built to transform spaces around you.
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Transform Your Workspace Into a{" "}
            <span className="text-primary">Living Environment</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Premium  plant hire, installation & maintenance for commercial spaces across Australia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={onOpenQuote} className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8">
              Get Instant Quote
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              View Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:block">
          <div className="bg-card rounded-2xl shadow-warm-lg p-6 border border-border max-w-sm ml-auto">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-green-light rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Live Plant Health Dashboard</span>
            </div>
            {[
              { name: "Monstera – Lobby", status: "Healthy", icon: LeafIcon, color: "text-green-light" },
              { name: "Fiddle Leaf – L3", status: "Healthy", icon: LeafIcon, color: "text-green-light" },
              { name: "ZZ Plant – Meeting Rm", status: "Needs Water", icon: Droplets, color: "text-accent" },
              { name: "Peace Lily – Reception", status: "Healthy", icon: LeafIcon, color: "text-green-light" },
              { name: "Pothos – Breakroom", status: "Check Light", icon: AlertTriangle, color: "text-accent" },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <p.icon className={`w-4 h-4 ${p.color}`} />
                  <span className="text-sm text-foreground">{p.name}</span>
                </div>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  p.status === "Healthy" ? "bg-green-light/10 text-green-light" : "bg-accent/10 text-accent"
                }`}>{p.status}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
