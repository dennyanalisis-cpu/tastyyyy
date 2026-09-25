export interface MenuItem {
  id: string;
  name: string;
  category: 'Hamburguesas' | 'Combos' | 'Bebidas' | 'HotDogs' | 'Papas';
  weight: string;
  price: number; // in RD$
  description: string;
  image: string;
  tags?: string[];
  isPopular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  likes: number;
  date: string;
}
