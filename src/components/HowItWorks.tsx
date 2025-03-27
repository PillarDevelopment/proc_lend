import { HowItWorksProps } from '../types/landing';
import { motion } from 'framer-motion';

export const HowItWorks = ({ title, steps, features }: HowItWorksProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#FF0080] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#7928CA] bg-opacity-20 p-6 rounded-lg text-center backdrop-blur-sm"
            >
              <p className="text-gray-200 font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 