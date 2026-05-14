import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahomka FM",
      location: "Volunteer Partner, Ghana",
      text: "We are proud to stand with SHE HELPING HAND. Their dedication to transparency and real-world impact makes them a standout organization in our region. Together, we are building a better future.",
      image: "/AHOMKA FM.jpeg"
    },
    {
      name: "Cape Coast Teaching Hospital",
      location: "Volunteer Partner, Cape Coast",
      text: "Our partnership with SHE HELPING HAND has significantly improved healthcare accessibility in the region. Their commitment to community support and healthcare outreach is invaluable.",
      image: "/CAPE COAST TEACHING HOSPITAL.jpeg"
    },
    {
      name: "Ocean 1 TV",
      location: "Media Partner, Ghana",
      text: "Our collaboration with SHE HELPING HAND allows us to bring critical social issues to the forefront. Their impact on women and children in the Central Region is profound and visible.",
      image: "/OCEAN1 TV.jpeg"
    },
    {
      name: "NEO REPORT",
      location: "Media Partner, Ghana",
      text: "Documenting the transformative work of SHE HELPING HAND has been a privilege. They are truly bridging the gap in humanitarian services and empowering the next generation.",
      image: "/NEO REPORT.jpeg"
    }
  ];

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="heading-md mb-6">Voices of <span className="text-primary italic">Impact</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from the frontlines of our mission. Every partner and volunteer 
            helps us move a step closer to a better world for all.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/40 relative group border border-gray-50"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary flex items-center justify-center rounded-2xl text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Quote size={24} />
            </div>
            
            <p className="text-gray-600 italic leading-loose text-lg mb-8 pt-4">"{t.text}"</p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0 group-hover:border-primary/30 transition-colors">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 group-hover:text-primary transition-colors">{t.name}</h4>
                <p className="text-primary text-xs uppercase font-bold tracking-widest">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
