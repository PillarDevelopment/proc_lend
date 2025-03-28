import { HeroProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  const { theme, toggleTheme } = useTheme();

  const colors = {
    light: {
      background: '#F5F5DC',
      accent: '#32CD32',
      text: '#1B4D3E',
      gradient: 'from-[#F5F5DC]/80 via-[#F5F5DC]/60 to-[#F5F5DC]/80',
      radial: 'rgba(50,205,50,0.15)',
      linear: 'rgba(218,165,32,0.15)',
    },
    dark: {
      background: '#1a1f3c',
      accent: '#FF0080',
      text: '#ffffff',
      gradient: 'from-[#1a1f3c]/80 via-[#1a1f3c]/60 to-[#1a1f3c]/80',
      radial: 'rgba(255,0,128,0.15)',
      linear: 'rgba(121,40,202,0.15)',
    }
  };

  const currentColors = colors[theme];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Theme toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={toggleTheme}
        style={{
          backgroundColor: `${currentColors.accent}10`,
          color: currentColors.accent,
          borderColor: `${currentColors.accent}20`,
        }}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full backdrop-blur-sm border flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {theme === 'light' ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </motion.button>

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
          className={`absolute inset-0 bg-gradient-to-b ${currentColors.gradient}`}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${currentColors.radial}_0%,transparent_70%)]`}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={`absolute inset-0 bg-[linear-gradient(45deg,${currentColors.linear}_0%,transparent_70%)]`}
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
            style={{
              backgroundColor: `${currentColors.accent}10`,
              color: currentColors.accent,
              borderColor: `${currentColors.accent}20`,
            }}
            className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border"
          >
            THE #1 CRYPTO PROCESSING
          </motion.div>

          <h1 
            style={{ color: currentColors.text }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            {title}
          </h1>
          
          <p 
            style={{ color: currentColors.text }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
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
              style={{
                background: `linear-gradient(to right, ${currentColors.accent}, ${currentColors.background})`,
                color: currentColors.text,
                boxShadow: `0 4px 6px -1px ${currentColors.accent}30`,
              }}
              className="inline-block px-16 py-6 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg"
            >
              {buttonText}
            </a>
            <div 
              style={{ color: currentColors.text }}
              className="text-sm"
            >
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
              <div 
                style={{ color: currentColors.accent }}
                className="text-3xl font-bold mb-2"
              >
                10+
              </div>
              <div 
                style={{ color: currentColors.text }}
                className="text-sm"
              >
                Years of expertise
              </div>
            </div>
            <div className="text-center">
              <div 
                style={{ color: currentColors.accent }}
                className="text-3xl font-bold mb-2"
              >
                800+
              </div>
              <div 
                style={{ color: currentColors.text }}
                className="text-sm"
              >
                Merchant accounts
              </div>
            </div>
            <div className="text-center">
              <div 
                style={{ color: currentColors.accent }}
                className="text-3xl font-bold mb-2"
              >
                1M+
              </div>
              <div 
                style={{ color: currentColors.text }}
                className="text-sm"
              >
                Transactions/month
              </div>
            </div>
            <div className="text-center">
              <div 
                style={{ color: currentColors.accent }}
                className="text-3xl font-bold mb-2"
              >
                200+
              </div>
              <div 
                style={{ color: currentColors.text }}
                className="text-sm"
              >
                Team members
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 