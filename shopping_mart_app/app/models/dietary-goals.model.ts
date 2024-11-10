export interface DietaryGoals {
    categoryDistribution: {
        [key: string]: number; // percentage for each category
    };
    maxCalories: number;
    minProtein: number;
    maxCarbs: number;
    maxFat: number;
}