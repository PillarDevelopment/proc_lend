import { HeroProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(121,40,202,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-[#FF0080]/10 text-[#FF0080] px-6 py-2 rounded-full text-sm font-medium mb-8"
          >
            THE #1 CRYPTO PROCESSING
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF0080] text-white px-16 py-6 rounded-lg font-semibold hover:bg-[#7928CA] transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg hover:shadow-[#FF0080]/30"
            >
              {buttonText}
            </a>
            <div className="text-gray-400 text-sm">
              *as cryptocurrency services supplier by the EGR B2B Awards 2023
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years of expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">800+</div>
              <div className="text-gray-400">Merchant accounts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">Transactions/month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Team members</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 