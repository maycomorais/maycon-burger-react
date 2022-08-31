export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Table {
  id?: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  ddd: number;
  tellphone: number;
  postalCode: number;
  street: string;
  complement: string;
  number: number;
  district: string;
  city: string;
  state: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  uptadedAt: Date;
}

export interface Favorite {
  id?: string;
  userId: string;
  productName: string;
  favoritedAt?: Date;
}

export interface Order {
  id?: string;
  tableNumber?: number;
  userId: string;
  createdAt?: Date;
}

export interface OrderToProduct {
  id?: string;
  productId: string;
  orderId: string;
  quantity: number;
  createdAt?: Date;
}
