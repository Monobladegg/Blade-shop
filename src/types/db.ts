export interface ICategory {
  id: number;
  title: string;
  products: IProduct[];
}

export interface IProduct {
  parentId?: number;
  id: number;
  title: string;
  price: number;
  author: string;
  rating: number;
  popularity: number;
  image?: string;
  category?: string;
}