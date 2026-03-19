import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Building2, Ruler, DoorOpen, Trees, ArrowRight } from "lucide-react";

const spaceTypes = ["Office", "Retail", "Hospitality", "Healthcare", "Other"];
const plantPrefs = ["Low maintenance", "Lush & tropical", "Minimalist", "Let us decide"];

const QuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState("");
  const [area, setArea] = useState([200]);
  const [rooms, setRooms] = useState([5]);
  const [pref, setPref] = useState("");

  const estimate = 150 + area[0] * 0.8 + rooms[0] * 40;

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Get an Instant Estimate</h2>
          <p className="text-muted-foreground">Answer a few questions for a ballpark monthly price.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-2xl shadow-warm-lg border border-border p-8">
          <div className="w-full bg-muted rounded-full h-1.5 mb-8">
            <div className="bg-accent h-1.5 rounded-full transition-all duration-300" style={{ width: `${step * 20}%` }} />
          </div>

          {step === 1 && (
            <div>
              <p className="font-medium mb-4 flex items-center gap-2"><Building2 className="w-4 h-4 text-accent" /> What type of space?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {spaceTypes.map((t) => (
                  <button key={t} onClick={() => { setSpaceType(t); setStep(2); }}
                    className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ${spaceType === t ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="font-medium mb-6 flex items-center gap-2"><Ruler className="w-4 h-4 text-accent" /> Floor area</p>
              <Slider min={50} max={2000} step={50} value={area} onValueChange={setArea} />
              <p className="text-center mt-4 font-mono text-3xl font-bold text-accent">{area[0]} sqm</p>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-1 bg-accent text-accent-foreground hover:bg-gold-light" onClick={() => setStep(3)}>Next <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <p className="font-medium mb-6 flex items-center gap-2"><DoorOpen className="w-4 h-4 text-accent" /> Number of rooms/zones</p>
              <Slider min={1} max={20} step={1} value={rooms} onValueChange={setRooms} />
              <p className="text-center mt-4 font-mono text-3xl font-bold text-accent">{rooms[0]} zones</p>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                <Button className="flex-1 bg-accent text-accent-foreground hover:bg-gold-light" onClick={() => setStep(4)}>Next <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <p className="font-medium mb-4 flex items-center gap-2"><Trees className="w-4 h-4 text-accent" /> Plant preference</p>
              <div className="grid grid-cols-2 gap-3">
                {plantPrefs.map((p) => (
                  <button key={p} onClick={() => { setPref(p); setStep(5); }}
                    className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ${pref === p ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"}`}>
                    {p}
                  </button>
                ))}
              </div>
              <Button variant="outline" className="mt-4" onClick={() => setStep(3)}>Back</Button>
            </div>
          )}
          {step === 5 && (
            <div className="text-center">
              <div className="bg-primary/5 rounded-2xl p-8">
                <p className="text-sm text-muted-foreground mb-2">Estimated monthly plan from</p>
                <p className="font-mono text-5xl font-bold text-primary">${Math.round(estimate)}<span className="text-xl text-muted-foreground">/mo</span></p>
                <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
                  <span className="bg-background px-3 py-1 rounded-full">{spaceType}</span>
                  <span className="bg-background px-3 py-1 rounded-full">{area[0]} sqm</span>
                  <span className="bg-background px-3 py-1 rounded-full">{rooms[0]} zones</span>
                  <span className="bg-background px-3 py-1 rounded-full">{pref}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 mb-4">This is a ballpark estimate. Book a free consult for an exact quote.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => { setStep(1); setSpaceType(""); setPref(""); }}>Start Over</Button>
                <Button className="flex-1 bg-primary text-primary-foreground">Book Free Consultation</Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
