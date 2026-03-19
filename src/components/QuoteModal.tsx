import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, Ruler, DoorOpen, Trees, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const spaceTypes = ["Office", "Retail", "Hospitality", "Healthcare", "Other"];
const plantPrefs = ["Low maintenance", "Lush & tropical", "Minimalist", "Let us decide"];

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const QuoteModal = ({ open, onClose }: QuoteModalProps) => {
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState("");
  const [area, setArea] = useState([200]);
  const [rooms, setRooms] = useState([5]);
  const [pref, setPref] = useState("");

  const estimate = 150 + area[0] * 0.8 + rooms[0] * 40;

  const reset = () => { setStep(1); setSpaceType(""); setArea([200]); setRooms([5]); setPref(""); };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-background rounded-2xl shadow-warm-lg w-full max-w-lg p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => { onClose(); reset(); }} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Instant Quote</h3>
              <p className="text-sm text-muted-foreground">Step {step} of 5</p>
            </div>
          </div>

          <div className="w-full bg-muted rounded-full h-1.5 mb-8">
            <div className="bg-accent h-1.5 rounded-full transition-all duration-300" style={{ width: `${step * 20}%` }} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              {step === 1 && (
                <div>
                  <p className="font-medium mb-4 flex items-center gap-2"><Building2 className="w-4 h-4 text-accent" /> What type of space?</p>
                  <div className="grid grid-cols-2 gap-3">
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
                  <p className="font-medium mb-4 flex items-center gap-2"><Ruler className="w-4 h-4 text-accent" /> Floor area</p>
                  <div className="py-4">
                    <Slider min={50} max={2000} step={50} value={area} onValueChange={setArea} />
                    <p className="text-center mt-3 font-mono text-2xl font-bold text-accent">{area[0]} sqm</p>
                  </div>
                  <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-gold-light" onClick={() => setStep(3)}>Next</Button>
                </div>
              )}
              {step === 3 && (
                <div>
                  <p className="font-medium mb-4 flex items-center gap-2"><DoorOpen className="w-4 h-4 text-accent" /> Number of rooms/zones</p>
                  <div className="py-4">
                    <Slider min={1} max={20} step={1} value={rooms} onValueChange={setRooms} />
                    <p className="text-center mt-3 font-mono text-2xl font-bold text-accent">{rooms[0]} zones</p>
                  </div>
                  <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-gold-light" onClick={() => setStep(4)}>Next</Button>
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
                </div>
              )}
              {step === 5 && (
                <div className="text-center">
                  <div className="bg-primary/5 rounded-2xl p-8 mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Estimated monthly plan from</p>
                    <p className="font-mono text-4xl font-bold text-primary">${Math.round(estimate)}<span className="text-lg text-muted-foreground">/mo</span></p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
                      <span className="bg-background px-2 py-1 rounded-full">{spaceType}</span>
                      <span className="bg-background px-2 py-1 rounded-full">{area[0]} sqm</span>
                      <span className="bg-background px-2 py-1 rounded-full">{rooms[0]} zones</span>
                      <span className="bg-background px-2 py-1 rounded-full">{pref}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">This is a ballpark estimate. Book a free consult for an exact quote.</p>
                  <Button className="w-full bg-primary text-primary-foreground" onClick={() => { onClose(); reset(); }}>Book Free Consultation</Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step > 1 && step < 5 && (
            <button onClick={() => setStep(step - 1)} className="mt-4 text-sm text-muted-foreground hover:text-foreground">← Back</button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteModal;
