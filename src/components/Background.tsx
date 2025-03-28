import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const Background = () => {
  const { theme } = useTheme();

  const colors = {
    light: {
      background: '#F5F5DC',
      accent: '#32CD32',
      gradient: 'from-[#F5F5DC] via-[#32CD32] to-[#F5F5DC]',
      grid: '#32CD32',
    },
    dark: {
      background: '#1a1f3c',
      accent: '#FF0080',
      gradient: 'from-[#1a1f3c] via-[#FF0080] to-[#1a1f3c]',
      grid: '#FF0080',
    }
  };

  const currentColors = colors[theme];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: currentColors.background }}>
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentColors.gradient}`} />
      
      {/* Simple animated shape */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-3xl"
        style={{ backgroundColor: currentColors.accent }}
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
          backgroundImage: `linear-gradient(to right, ${currentColors.grid} 1px, transparent 1px),
                           linear-gradient(to bottom, ${currentColors.grid} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.3,
        }}
      />
      
      {/* Simple particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: currentColors.accent }}
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