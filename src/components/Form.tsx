import { FormProps } from '../types/landing';
import { motion } from 'framer-motion';

export const Form = ({ title, fields, buttonText, submitAction }: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="form" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{title}</h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-[#7928CA] bg-opacity-20 p-8 rounded-lg backdrop-blur-sm"
          >
            {fields.map((field, index) => (
              <div key={index} className="mb-6">
                <label className="block text-gray-200 mb-2">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#FF0080]"
                    rows={4}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#FF0080]"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-[#FF0080] text-white py-3 rounded-lg font-semibold hover:bg-[#7928CA] transition-colors duration-300"
            >
              {buttonText}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}; 