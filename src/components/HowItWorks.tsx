import { HowItWorksProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../theme/colors';

export const HowItWorks = ({ title, steps, features }: HowItWorksProps) => {
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
          {steps.map((step, index) => (
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
              className="p-6 rounded-lg border backdrop-blur-sm"
            >
              <div 
                style={{ color: currentColors.accent }}
                className="text-2xl font-bold mb-4"
              >
                {index + 1}
              </div>
              <p 
                style={{ color: currentColors.text }}
                className="text-lg"
              >
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: currentColors.cardBg,
                  borderColor: currentColors.cardBorder,
                }}
                className="p-6 rounded-lg border backdrop-blur-sm"
              >
                <p 
                  style={{ color: currentColors.text }}
                  className="text-lg font-medium"
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 