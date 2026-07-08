import { motion } from "motion/react";
import { ArrowDown, ShieldAlert, GraduationCap, Globe2, Briefcase } from "lucide-react";

export default function WhyIcao() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Why ICAO English Matters
          </h2>
          <p className="text-lg text-gray-600">
            Poor communication has caused real aviation accidents. The ICAO test exists to keep pilots safe. Effective communication increases safety margins significantly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
          <Step 
            icon={<GraduationCap className="w-8 h-8" />} 
            title="Pilot" 
            delay={0}
          />
          <Arrow className="hidden md:block" />
          <Arrow className="md:hidden rotate-0" down />
          <Step 
            icon={<ShieldAlert className="w-8 h-8" />} 
            title="ICAO Test" 
            delay={0.2}
            highlight
          />
          <Arrow className="hidden md:block" />
          <Arrow className="md:hidden rotate-0" down />
          <Step 
            icon={<CheckMark />} 
            title="Pass" 
            delay={0.4}
            success
          />
          <Arrow className="hidden md:block" />
          <Arrow className="md:hidden rotate-0" down />
          <Step 
            icon={<Globe2 className="w-8 h-8" />} 
            title="Fly Internationally" 
            delay={0.6}
          />
          <Arrow className="hidden md:block" />
          <Arrow className="md:hidden rotate-0" down />
          <Step 
            icon={<Briefcase className="w-8 h-8" />} 
            title="Career Opportunities" 
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, delay, highlight, success }: { icon: React.ReactNode, title: string, delay: number, highlight?: boolean, success?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col items-center p-6 rounded-xl border-2 w-48 text-center transition-all ${
        highlight ? 'border-aircraft bg-aircraft/5 text-aircraft' : 
        success ? 'border-accent bg-accent/5 text-accent' : 
        'border-gray-100 bg-white text-navy shadow-sm'
      }`}
    >
      <div className={`mb-4 ${highlight ? 'text-aircraft' : success ? 'text-accent' : 'text-gray-400'}`}>
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
    </motion.div>
  );
}

function Arrow({ className, down }: { className?: string, down?: boolean }) {
  return (
    <div className={`text-gray-300 ${className}`}>
      {down ? <ArrowDown className="w-6 h-6" /> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
    </div>
  );
}

function CheckMark() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
  );
}
