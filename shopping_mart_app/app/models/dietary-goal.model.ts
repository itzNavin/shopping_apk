export interface DietaryGoal {
  id: string;
  name: string;
  categoryPercentages: Map<string, number>;
  nutritionalTargets: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fats?: number;
  };
}

export interface Product {
  id: string;
  name: string;
  category: string;
  nutritionalValues: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  price: number;
}

export interface ShoppingList {
  products: Product[];
  totalPrice: number;
  qrCode: string;
}