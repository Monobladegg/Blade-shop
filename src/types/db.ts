export interface ICategory {
  id: number;
  title: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  author: string;
  rating: number;
  popularity: number;
  image?: string;
}