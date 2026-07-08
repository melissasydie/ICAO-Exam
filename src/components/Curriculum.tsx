import { motion } from "motion/react";
import { Mic, BookOpen, Radio, AlertTriangle, MessageCircle, FileCheck2 } from "lucide-react";

const weeks = [
  { num: 1, title: "Pronunciation", icon: Mic, desc: "Clear articulation for global radio comprehension." },
  { num: 2, title: "Aviation Vocabulary", icon: BookOpen, desc: "Essential terminology for routine and non-routine flights." },
  { num: 3, title: "Radiotelephony", icon: Radio, desc: "Standard phraseology and standard communication." },
  { num: 4, title: "Unexpected Situations", icon: AlertTriangle, desc: "Communicating clearly during emergencies or anomalies." },
  { num: 5, title: "Fluency", icon: MessageCircle, desc: "Maintaining smooth, natural flow in plain English." },
  { num: 6, title: "ICAO Mock Exam", icon: FileCheck2, desc: "Full simulated assessment with detailed feedback." },
];

export default function Curriculum() {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Course Curriculum
          </h2>
          <p className="text-lg text-gray-600">
            A structured, 6-week intensive program designed to cover every aspect of the ICAO proficiency requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {weeks.map((week, i) => {
            const Icon = week.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-accent/50 transition-colors"
              >
                <div className="bg-navy/5 p-3 rounded-lg text-aircraft shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-accent mb-1 uppercase tracking-wider">Week {week.num}</div>
                  <h3 className="font-bold text-navy text-lg mb-1">{week.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{week.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
