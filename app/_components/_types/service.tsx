// _types/service.ts

export interface ServiceProps {
  id: number;
  title: string;
  image: string;
  description?: string;
  detailed?: string[]; 
  features?: string[];
  link: string;
}