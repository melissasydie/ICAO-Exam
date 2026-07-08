import { Plane, Calendar, Mail, MessageCircle } from "lucide-react";

export default function FooterCta() {
  return (
    <footer className="bg-navy pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Pass ICAO?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Join our next intake and secure your aviation career.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-accent text-navy hover:bg-cyan-300 font-bold rounded-xl transition-colors text-lg">
            <Plane className="w-5 h-5" />
            Join Next Intake
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors text-lg border border-white/10">
            <Calendar className="w-5 h-5" />
            Book Calendar
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 pb-12 border-b border-white/10">
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="pt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Aviation English by Simon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
