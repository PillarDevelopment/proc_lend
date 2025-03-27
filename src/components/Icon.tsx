import { IconProps } from '../types/landing';

export const Icon = ({ name, className = '' }: IconProps) => {
  const icons: Record<string, string> = {
    saas: '/images/saas.svg',
    casino: '/images/casino.svg',
    exchange: '/images/exchange.svg',
    freelance: '/images/freelance.svg',
  };

  return (
    <img
      src={icons[name] || '/images/default.svg'}
      alt={name}
      className={`w-12 h-12 ${className}`}
    />
  );
}; 