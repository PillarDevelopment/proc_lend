import { ContactsProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Contacts = ({ title, items }: ContactsProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#7928CA] bg-opacity-20 p-8 rounded-lg backdrop-blur-sm">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center space-x-4 mb-4 last:mb-0"
              >
                <div className="w-12 h-12 bg-[#FF0080] rounded-full flex items-center justify-center">
                  {item.type === 'email' && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {item.type === 'telegram' && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {item.type === 'website' && (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                </div>
                <a
                  href={item.type === 'email' ? `mailto:${item.label}` : 
                         item.type === 'website' ? `https://${item.label}` : 
                         `https://t.me/${item.label.replace('@', '')}`}
                  className="text-gray-200 hover:text-[#FF0080] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 