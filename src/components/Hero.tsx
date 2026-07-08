import { motion } from "motion/react";
import { PlaneTakeoff, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540866225557-9e4c58100c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Cockpit view"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 sm:py-48 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wide uppercase mb-6 border border-accent/20">
            Aviation English Training by an ICAO Examiner
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8">
            Pass Your ICAO English <br className="hidden md:block" />
            <span className="text-accent">Language Proficiency Test.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn directly from an ICAO Examiner with practical aviation English classes designed specifically for pilots and air traffic controllers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-navy hover:bg-cyan-300 font-semibold rounded-lg transition-colors text-lg">
              <PlaneTakeoff className="w-5 h-5" />
              Join the Next Group Class
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg backdrop-blur-sm border border-white/10">
              <Calendar className="w-5 h-5" />
              Book a Free Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
