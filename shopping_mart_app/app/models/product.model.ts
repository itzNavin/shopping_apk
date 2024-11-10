export interface Product {
    id: string;
    name: string;
    category: string;
    nutritionalValue: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
    price: number;
}