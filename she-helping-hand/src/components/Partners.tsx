import { motion } from 'motion/react';
import { Award, ShieldCheck } from 'lucide-react';

export default function Partners() {
  const partners = [
    "Cape Coast Teaching Hospital",
    "Planned Parenthood Association of Ghana",
    "Ridge Royal Hotel",
    "S.H.E Global",
    "Vivat Foundation"
  ];

  const mediaPartners = [
    { name: "Ocean 1 TV", image: "/OCEAN1 TV.jpeg" },
    { name: "NEO REPORT", image: "/NEO REPORT.jpeg" },
    { name: "Ahomka FM", image: "/AHOMKA FM.jpeg" }
  ];

  const awards = [
    {
      title: "Liz Hughes Award",
      org: "Farm Radio International",
      year: "2021",
      desc: "For contribution to community advocacy through the SHE SHOW."
    },
    {
      title: "Central Executive Broadcasters Award",
      org: "Media Recognition",
      year: "2021/2022",
      desc: "Awarded for exceptional impact in community broadcasting and advocacy."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Awards & Recognition */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={32} />
              <h2 className="text-3xl font-display font-bold text-gray-900 tracking-tight">Awards & Recognition</h2>
            </div>
            
            <div className="space-y-8">
              {awards.map((award, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display font-bold text-gray-900">{award.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{award.year}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{award.org}</p>
                  <p className="text-gray-600 leading-relaxed text-sm italic">"{award.desc}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="text-primary" size={32} />
              <h2 className="text-3xl font-display font-bold text-gray-900 tracking-tight">Collaborators</h2>
            </div>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We work closely with institutional partners and private organizations to maximize our impact and reach across the Central Region of Ghana.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partners.map((partner, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-center shadow-sm hover:border-primary/20 transition-all group"
                >
                  <span className="text-sm font-bold text-gray-500 group-hover:text-primary transition-colors uppercase tracking-tight italic">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Partners */}
        <div className="mt-24 pt-20 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 tracking-tight mb-4">Media Advocacy Partners</h2>
            <p className="text-gray-600">These organizations help us amplify our message through dedicated media coverage and advocacy platforms.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {mediaPartners.map((media, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="w-48 h-24 mb-4 bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/20">
                  <img 
                    src={media.image} 
                    alt={media.name} 
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors tracking-widest uppercase">{media.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
