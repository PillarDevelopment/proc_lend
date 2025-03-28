import { UseCasesProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../theme/colors';
import { Icon } from './Icon';

export const UseCases = ({ title, items }: UseCasesProps) => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="p-6 rounded-lg border backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300"
            >
              <div 
                style={{ backgroundColor: currentColors.iconBg }}
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              >
                <Icon 
                  name={item.icon} 
                  style={{ color: currentColors.iconColor }}
                />
              </div>
              <p 
                style={{ color: currentColors.text }}
                className="text-lg font-medium"
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 