import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart, Users } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      desc: "To empower women and children through advocacy, education, skills development, media engagement, and humanitarian support, creating opportunities for self-reliance and dignity.",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Our Vision",
      desc: "To build a society where every woman and child is empowered, supported, and equipped to thrive and contribute positively to nation building.",
      icon: Eye,
      color: "bg-green-50 text-green-600",
    }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/ABOUT.jpeg"
                alt="Our activities"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Geometric accents */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute top-1/2 -right-8 w-32 h-32 bg-green-600 rounded-3xl rotate-12 -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Our NGO</span>
            <h2 className="heading-md mb-6">Empowering Communities, <br /><span className="text-primary italic">One Hand</span> At A Time.</h2>
            <p className="text-body mb-6">
              SHE HELPING HAND is a non-governmental organization based in the Central Region of Ghana with a focus on empowering women, girls, and vulnerable children through advocacy, education, skills development, health awareness, and humanitarian support.
            </p>
            <p className="text-body mb-8 italic">
              Through its media advocacy platform, the <span className="font-bold text-gray-900">SHE SHOW</span>, aired on Ahomka FM and Ocean 1 TV, the organization creates awareness on issues relating to women empowerment, adolescent wellbeing, leadership, and social protection.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 transition-all cursor-default">
                <Heart className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-display font-bold text-gray-900">5k+</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-tight">Lives Touched</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 transition-all cursor-default">
                <Users className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-display font-bold text-gray-900">50+</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-tight">Volunteers</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 transition-all cursor-default">
                <ShieldCheck className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-display font-bold text-gray-900">5+</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-tight">Partners</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Vision Value Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          {cards.slice(0, 2).map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-primary/10 transition-all group"
            >
              <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-100"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600">The pillars that guide our mission and define our commitment to the communities we serve.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Compassion", "Empowerment", "Integrity", "Service", 
              "Inclusiveness", "Excellence", "Advocacy", "Community Development"
            ].map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <span className="font-bold text-gray-900 group-hover:text-primary transition-colors">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
