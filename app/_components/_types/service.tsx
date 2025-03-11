export interface Service {
  id: number | string;
  image: string;
  title: string;
  description: string;
  detailed?: string[];
  features?: string[];
}

export interface Category {
  category: string;
  categoryDescription: string;
  services: Service[];
}

export interface ServiceNavProps {
  activeCategory: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToCategory: (categoryId: string) => void;
  services: Category[];
}

export interface ServicesContentProps {
  services: Category[];
}