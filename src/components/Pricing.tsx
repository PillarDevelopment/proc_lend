import { PricingProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../theme/colors';

export const Pricing = ({ title, table }: PricingProps) => {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            backgroundColor: currentColors.cardBg,
            borderColor: currentColors.cardBorder,
          }}
          className="max-w-2xl mx-auto rounded-lg border backdrop-blur-sm overflow-hidden"
        >
          {table.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: index % 2 === 0 ? currentColors.hoverBg : 'transparent',
              }}
              className="flex justify-between items-center p-6"
            >
              <span 
                style={{ color: currentColors.text }}
                className="text-lg"
              >
                {row.item}
              </span>
              <span 
                style={{ color: currentColors.accent }}
                className="text-lg font-semibold"
              >
                {row.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 