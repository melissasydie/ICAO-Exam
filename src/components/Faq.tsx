import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does preparation take?", a: "Most students see significant improvement within our standard 6-week program. However, absolute beginners may need additional foundational work before focusing strictly on ICAO test prep." },
  { q: "Can I join from another country?", a: "Absolutely. All our classes are conducted online via high-quality video conferencing, allowing pilots from all over the world to join." },
  { q: "Do I need aviation experience?", a: "While beneficial, it's not strictly required. We cater to student pilots who are just starting out, teaching both the English and the necessary aviation context." },
  { q: "Do you offer private classes?", a: "Yes. Our private coaching option allows for 1-on-1 sessions tailored entirely to your schedule and specific weak areas." },
  { q: "What level of English do I need?", a: "To begin ICAO-specific preparation, a basic conversational level of English (B1/Intermediate) is recommended. If you're unsure, our Free Assessment will determine your starting point." },
];

export default function Faq() {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-gray-300">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-navy">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
