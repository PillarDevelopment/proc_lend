import { FeaturesProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Features = ({ title, items }: FeaturesProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#7928CA] bg-opacity-20 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF0080] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-200 font-medium">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 