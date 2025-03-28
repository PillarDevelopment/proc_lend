import { ContactsProps } from '../types/landing';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../theme/colors';

export const Contacts = ({ title, items }: ContactsProps) => {
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
          className="max-w-2xl mx-auto p-8 rounded-lg border backdrop-blur-sm"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-4 mb-4 last:mb-0"
            >
              <div 
                style={{ backgroundColor: currentColors.iconBg }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
              >
                {item.type === 'email' && (
                  <svg 
                    style={{ color: currentColors.iconColor }}
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 8L12 13L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {item.type === 'telegram' && (
                  <svg 
                    style={{ color: currentColors.iconColor }}
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 12C21 16.4183 16.9706 20 12 20C7.02944 20 3 16.4183 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12L12 16L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {item.type === 'website' && (
                  <svg 
                    style={{ color: currentColors.iconColor }}
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 12C21 16.4183 16.9706 20 12 20C7.02944 20 3 16.4183 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <a
                href={item.type === 'email' ? `mailto:${item.label}` : 
                       item.type === 'website' ? `https://${item.label}` : 
                       `https://t.me/${item.label.replace('@', '')}`}
                style={{ color: currentColors.text }}
                className="text-lg hover:opacity-80 transition-opacity duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 