import { PricingProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Pricing = ({ title, table }: PricingProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#7928CA] bg-opacity-20 rounded-lg backdrop-blur-sm overflow-hidden">
            {table.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex justify-between items-center p-6 ${
                  index % 2 === 0 ? 'bg-[#7928CA] bg-opacity-10' : ''
                }`}
              >
                <span className="text-gray-200">{row.item}</span>
                <span className="text-[#FF0080] font-semibold">{row.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 