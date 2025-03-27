import { HeroProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {subtitle}
          </p>
          <a
            href={buttonLink}
            className="inline-block bg-[#FF0080] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7928CA] transition-colors duration-300"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 