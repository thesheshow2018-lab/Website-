import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, User, Landmark, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('0596323104');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 text-center">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>

              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-primary w-10 h-10" />
              </div>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Support SHE FOUNDATION</h3>
              <p className="text-gray-500 mb-8">Your contribution makes a direct impact on our community outreaches.</p>

              <div className="space-y-4 text-left">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Smartphone className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">MoMo Number</p>
                      <div className="flex items-center gap-3">
                        <p className="text-xl font-mono font-bold text-gray-900">0596323104</p>
                        <button 
                          onClick={copyToClipboard}
                          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          title="Copy number"
                        >
                          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-400" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-gray-200/50 w-full" />

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <User className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account Name</p>
                      <p className="text-lg font-bold text-gray-900">SHE FOUNDATION</p>
                    </div>
                  </div>

                  <div className="h-px bg-gray-200/50 w-full" />

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Landmark className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Network</p>
                      <p className="text-lg font-bold text-gray-900 text-yellow-600 flex items-center gap-2">
                        MTN Mobile Money
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={onClose}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors"
                >
                  Confirm I've Sent
                </button>
                <p className="text-xs text-gray-400 mt-4 px-4 italic leading-relaxed">
                  Note: Please use your name as reference so we can acknowledge your support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
