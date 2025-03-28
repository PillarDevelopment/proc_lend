import { FeaturesProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../theme/colors';

export const Features = ({ title, items }: FeaturesProps) => {
  const { theme } = useTheme();
  const currentColors = colors[theme];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 
            style={{ color: currentColors.text }}
            className="text-4xl font-bold mb-4"
          >
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.cardBorder,
              }}
              className="p-6 rounded-lg border backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4">
                <div 
                  style={{ backgroundColor: currentColors.iconBg }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <svg 
                    style={{ color: currentColors.iconColor }}
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p 
                  style={{ color: currentColors.text }}
                  className="text-lg font-medium"
                >
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 