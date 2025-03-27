import { UseCasesProps } from '../types/landing';
import { Icon } from './Icon';
import { motion } from 'framer-motion';

export const UseCases = ({ title, items }: UseCasesProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#7928CA] bg-opacity-20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center text-center">
                <Icon name={item.icon} className="mb-4 text-[#FF0080]" />
                <p className="text-gray-200 font-medium">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 