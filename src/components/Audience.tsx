import { motion } from "motion/react";
import { Plane, Compass, Building, GraduationCap, Radio, BookOpen } from "lucide-react";

const audiences = [
  { icon: Plane, title: "Student Pilots", desc: "Start your career with a solid foundation in radiotelephony." },
  { icon: Compass, title: "Commercial Pilots", desc: "Maintain your licence and prepare for international routes." },
  { icon: Building, title: "Airline Applicants", desc: "Stand out in your airline interview with Level 5 or 6 English." },
  { icon: GraduationCap, title: "Flight Instructors", desc: "Enhance your instructional clarity and communication." },
  { icon: Radio, title: "Air Traffic Controllers", desc: "Ensure precise communication for absolute safety." },
  { icon: BookOpen, title: "Aviation Students", desc: "Get ahead of the curve before you even take to the skies." },
];

export default function Audience() {
  return (
    <section className="py-24 bg-navy text-white relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/50 via-navy to-navy" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Who This Course Is For
          </h2>
          <p className="text-lg text-gray-300">
            Tailored specifically for aviation professionals who need to demonstrate clear, concise, and accurate English communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
