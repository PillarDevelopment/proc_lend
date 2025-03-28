import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Form } from './components/Form';
import { Contacts } from './components/Contacts';
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
      case 'features':
        return <Features {...block.props} />;
      case 'pricing':
        return <Pricing {...block.props} />;
      case 'form':
        return <Form {...block.props} />;
      case 'contacts':
        return <Contacts {...block.props} />;
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