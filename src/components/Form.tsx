import { FormProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../theme/colors';

export const Form = ({ title, fields, buttonText, submitAction }: FormProps) => {
  const { theme } = useTheme();
  const currentColors = colors[theme];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          style={{
            backgroundColor: currentColors.cardBg,
            borderColor: currentColors.cardBorder,
          }}
          className="max-w-2xl mx-auto p-8 rounded-lg border backdrop-blur-sm"
        >
          {fields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <label 
                style={{ color: currentColors.text }}
                className="block text-lg font-medium mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  style={{
                    backgroundColor: currentColors.hoverBg,
                    borderColor: currentColors.cardBorder,
                    color: currentColors.text,
                  }}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300"
                  rows={4}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  style={{
                    backgroundColor: currentColors.hoverBg,
                    borderColor: currentColors.cardBorder,
                    color: currentColors.text,
                  }}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300"
                />
              )}
            </motion.div>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: fields.length * 0.1 }}
            type="submit"
            style={{
              background: `linear-gradient(to right, ${currentColors.accent}, ${currentColors.background})`,
              color: currentColors.text,
              boxShadow: `0 4px 6px -1px ${currentColors.accent}30`,
            }}
            className="w-full py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            {buttonText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}; 