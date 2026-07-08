import { motion } from "motion/react";
import { Award, Users, Star } from "lucide-react";

export default function Instructor() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-96 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1559813353-839352e89694?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Simon - ICAO Examiner" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Meet Your Instructor</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">Simon</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As an official ICAO Examiner and Aviation English Specialist, I know exactly what it takes to pass the assessment. I don't just teach English; I teach the precise communication skills you need to stay safe in the skies and advance your career.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy/5 rounded-lg text-aircraft">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">ICAO Examiner</h4>
                    <p className="text-sm text-gray-500">Certified Assessor</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy/5 rounded-lg text-aircraft">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">10+ Years</h4>
                    <p className="text-sm text-gray-500">Aviation Experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy/5 rounded-lg text-aircraft">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">500+ Students</h4>
                    <p className="text-sm text-gray-500">Successfully Trained</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy/5 rounded-lg text-aircraft">
                    <CheckBadge />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">98% Pass Rate</h4>
                    <p className="text-sm text-gray-500">First-time passing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckBadge() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  );
}
