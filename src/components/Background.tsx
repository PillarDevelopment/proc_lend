import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0080] via-[#7928CA] to-[#FF0080]" />
      
      {/* Simple animated shape */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF0080] rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Simple grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #FF0080 1px, transparent 1px),
                           linear-gradient(to bottom, #FF0080 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.3,
        }}
      />
      
      {/* Simple particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FF0080] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}; 