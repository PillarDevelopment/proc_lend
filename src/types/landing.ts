export interface Block {
  type: string;
  props: Record<string, any>;
}

export interface Page {
  name: string;
  blocks: Block[];
}

export interface LandingData {
  page: Page;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface HowItWorksProps {
  title: string;
  steps: string[];
  features: string[];
}

export interface UseCaseItem {
  icon: string;
  text: string;
}

export interface UseCasesProps {
  title: string;
  items: UseCaseItem[];
}

export interface FeaturesProps {
  title: string;
  items: string[];
}

export interface PricingTableItem {
  item: string;
  value: string;
}

export interface PricingProps {
  title: string;
  table: PricingTableItem[];
}

export interface FormField {
  label: string;
  name: string;
  type: string;
}

export interface FormProps {
  title: string;
  fields: FormField[];
  buttonText: string;
  submitAction: {
    type: string;
    url: string;
  };
}

export interface ContactItem {
  type: string;
  label: string;
}

export interface ContactsProps {
  title: string;
  items: ContactItem[];
}

export interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
} 