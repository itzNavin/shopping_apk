import { Observable, Frame } from '@nativescript/core';
import { DietaryGoal } from '../models/dietary-goal.model';

export class DietaryGoalsViewModel extends Observable {
    private _nutritionalTargets = {
        calories: 2000,
        protein: 50,
        carbs: 250,
        fats: 70
    };

    constructor() {
        super();
    }

    get nutritionalTargets() {
        return this._nutritionalTargets;
    }

    set nutritionalTargets(value) {
        this._nutritionalTargets = value;
        this.notifyPropertyChange('nutritionalTargets', value);
    }

    saveGoals() {
        const goal: DietaryGoal = {
            id: Date.now().toString(),
            name: 'Custom Goal',
            categoryPercentages: new Map([
                ['vegetables', 40],
                ['fruits', 40],
                ['dryFruits', 20]
            ]),
            nutritionalTargets: this._nutritionalTargets
        };

        // Navigate back to main page with the new goal
        const frame = Frame.topmost();
        frame.goBack();
        
        // Update the main view model with the new goal
        const mainViewModel = frame.currentPage?.bindingContext;
        if (mainViewModel) {
            mainViewModel.setDietaryGoal(goal);
        }
    }
}