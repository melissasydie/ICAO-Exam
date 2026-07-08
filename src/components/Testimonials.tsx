import { motion } from "motion/react";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Alex M.",
    role: "Commercial Pilot",
    before: "I struggled speaking confidently with ATC during non-routine situations.",
    after: "I passed ICAO Level 5. Simon's focus on plain English in unexpected scenarios was a game-changer.",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sarah J.",
    role: "First Officer",
    before: "I was stuck at Level 4 for years and needed Level 5 for an international airline interview.",
    after: "Just got my Level 5 certificate! The mock exams were exactly like the real thing.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds of pilots who have successfully secured their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-200" />
              
              <div className="flex items-center gap-4 mb-8">
                <img src={story.img} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h3 className="font-bold text-navy text-lg">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Before</span>
                  <p className="text-gray-600 italic">"{story.before}"</p>
                </div>
                <div className="h-px w-12 bg-gray-200"></div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">After</span>
                  <p className="text-navy font-medium">"{story.after}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
