export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Analytics {
  totalSales: number;
  topProducts: Product[];
  monthlyRevenue: number[];
}