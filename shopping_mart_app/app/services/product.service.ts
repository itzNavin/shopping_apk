import { Observable } from '@nativescript/core';
import { Product } from '../models/dietary-goal.model';

export class ProductService extends Observable {
  private products: Product[] = [];

  async fetchProductCatalog(catalogData: string): Promise<Product[]> {
    // Will implement actual catalog fetching
    this.products = [
      {
        id: '1',
        name: 'Spinach',
        category: 'vegetables',
        nutritionalValues: {
          calories: 23,
          protein: 2.9,
          carbs: 3.6,
          fats: 0.4
        },
        price: 2.99
      },
      // More products would be added here
    ];
    return this.products;
  }

  filterProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}