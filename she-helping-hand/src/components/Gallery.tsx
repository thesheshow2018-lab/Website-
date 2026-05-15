import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const albums = [
    { 
      title: "Hospital Outreaches", 
      thumbnail: "/HOSPITAL OUTREACHES.jpeg",
      images: []
    },
    { 
      title: "Conferences", 
      thumbnail: "/COMFERENCES.jpeg",
      images: []
    },
    { 
      title: "Skills Training", 
      thumbnail: "/SKILLS TRAINING.jpeg",
      images: [
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.09 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.09.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.10 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.10 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.10 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.10 (4).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.10.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.11 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.11 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.11 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.11.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.12 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.12 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.12 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.12 (4).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.12.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.13 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.13 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.13 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.13.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.14 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.14 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.14 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.46.14.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.21.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.22 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.22 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.22.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.23 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.23 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.23 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.23 (4).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.23.jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.24 (1).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.24 (2).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.24 (3).jpeg",
        "/skills-training/WhatsApp Image 2026-05-14 at 15.50.24.jpeg",
      ]
    },
    { 
      title: "Programs Held", 
      thumbnail: "/PROGRAMS HELD.jpeg",
      images: []
    },
    { 
      title: "Awards", 
      thumbnail: "/AWARDS.jpeg",
      images: []
    }
  ];

  const openAlbum = (idx: number) => {
    if (albums[idx].images.length === 0) return;
    setSelectedAlbum(idx);
    setCurrentImageIdx(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedAlbum !== null) {
      setCurrentImageIdx((prev) => (prev + 1) % albums[selectedAlbum].images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedAlbum !== null) {
      setCurrentImageIdx((prev) => 
        (prev - 1 + albums[selectedAlbum].images.length) % albums[selectedAlbum].images.length
      );
    }
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16 px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Visual Stories</span>
          <h2 className="heading-md mb-6">Our <span className="text-primary italic">Gallery</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our curated albums showcasing our impact across various programs and ceremonies.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {albums.map((album, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => openAlbum(idx)}
            className="group relative h-96 rounded-[3rem] overflow-hidden cursor-pointer"
          >
            <img
              src={encodeURI(album.thumbnail)}
              alt={album.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-10">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <p className="text-white font-display font-bold text-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {album.title}
                  </p>
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                </div>
                <p className="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {album.images.length} Photos • {album.images.length > 0 ? 'View Album' : 'Empty Album'}
                </p>
                <div className="w-12 h-1 bg-primary mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Album Viewer Modal */}
      <AnimatePresence>
        {selectedAlbum !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedAlbum(null)}
          >
            <button 
              onClick={() => setSelectedAlbum(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[60]"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold font-display">{albums[selectedAlbum].title}</h3>
                <p className="text-white/50 text-sm mt-1">{currentImageIdx + 1} / {albums[selectedAlbum].images.length}</p>
              </div>

              <div className="relative flex items-center justify-center w-full max-h-[70vh] group">
                <button 
                  onClick={prevImage}
                  className="absolute left-0 -ml-4 md:-ml-12 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <motion.img
                  key={currentImageIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  src={encodeURI(albums[selectedAlbum].images[currentImageIdx])}
                  alt={`${albums[selectedAlbum].title} - ${currentImageIdx + 1}`}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                <button 
                  onClick={nextImage}
                  className="absolute right-0 -mr-4 md:-mr-12 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails list for quick navigation */}
              <div className="flex gap-2 p-4 overflow-x-auto max-w-full no-scrollbar">
                {albums[selectedAlbum].images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIdx(i)}
                    className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                      i === currentImageIdx ? 'ring-2 ring-primary scale-110 opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <img src={encodeURI(img)} alt="nav" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
