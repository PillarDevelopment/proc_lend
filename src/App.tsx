import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Background } from './components/Background';
import { LandingData } from './types/landing';
import lendingData from '../lending.json';

const App = () => {
  const { page } = lendingData as LandingData;

  const renderBlock = (block: any) => {
    switch (block.type) {
      case 'hero':
        return <Hero {...block.props} />;
      case 'how-it-works':
        return <HowItWorks {...block.props} />;
      case 'use-cases':
        return <UseCases {...block.props} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Background />
      <div className="relative z-10 text-white">
        {page.blocks.map((block, index) => (
          <div key={index}>
            {renderBlock(block)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; 