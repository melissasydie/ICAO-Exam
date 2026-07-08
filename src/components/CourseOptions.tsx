import { motion } from "motion/react";
import { Check, Mail } from "lucide-react";

export default function CourseOptions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Course Options
          </h2>
          <p className="text-lg text-gray-600">
            Choose the path that best fits your learning style and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-accent relative bg-white rounded-3xl p-8 shadow-xl flex flex-col"
          >
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent text-navy font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2 mt-4">Group ICAO Preparation</h3>
            <p className="text-gray-500 mb-6">Collaborative learning for optimal results.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['Weekly live classes', 'Speaking practice', 'Mock ICAO exams', 'Homework assignments', 'Small focused groups', 'Certificate of completion'].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-navy text-white font-semibold hover:bg-aircraft transition-colors">
              Inquire Now
            </button>
          </motion.div>

          {/* Private */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-gray-200 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-2xl font-bold text-navy mb-2">Private Coaching</h3>
            <p className="text-gray-500 mb-6">1-on-1 personalized attention.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['1-on-1 private sessions', 'Personalized feedback', 'Highly flexible schedule', 'Fast-track preparation', 'Targeted weak-area focus'].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-gray-50 text-navy font-semibold hover:bg-gray-100 border border-gray-200 transition-colors">
              Inquire Now
            </button>
          </motion.div>

          {/* Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-200 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-2xl font-bold text-navy mb-2">Mock ICAO Assessment</h3>
            <p className="text-gray-500 mb-6">Test your readiness before the real thing.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['60-minute assessment', 'Current ICAO level grading', 'Detailed weak areas report', 'Customized study plan', 'Real examiner feedback'].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-gray-50 text-navy font-semibold hover:bg-gray-100 border border-gray-200 transition-colors">
              Book Assessment
            </button>
          </motion.div>

        </div>

        {/* Lead Magnet */}
        <div className="mt-16 max-w-4xl mx-auto bg-slate-50 border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Ready to take flight?</h3>
            <p className="text-gray-600">Leave your email address and we'll send you our complete pricing list and available schedules.</p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="flex w-full md:w-80">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-10 pr-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <button className="bg-aircraft hover:bg-navy text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
