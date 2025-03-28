import { HeroProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/tennis-player.jpg")',
            filter: 'brightness(0.4) contrast(1.2)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Gradient overlays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-[#1a1f3c]/80 via-[#1a1f3c]/60 to-[#1a1f3c]/80"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,51,102,0.15)_0%,transparent_70%)]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-6 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-[#FFD700]/20"
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
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1a1f3c] px-16 py-6 rounded-lg font-semibold hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/30"
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
            transition={{ duration: 0.5, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">10+</div>
              <div className="text-gray-400">Years of expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">800+</div>
              <div className="text-gray-400">Merchant accounts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">1M+</div>
              <div className="text-gray-400">Transactions/month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">200+</div>
              <div className="text-gray-400">Team members</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 