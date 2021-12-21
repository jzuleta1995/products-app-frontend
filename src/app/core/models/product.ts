import { User } from './user';

export class Product {
  _id?: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  createAt: Date;
  user: User;
}
