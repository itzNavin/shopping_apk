import { Observable } from '@nativescript/core';

export class DietaryGoalsViewModel extends Observable {
    private _maxCalories: number = 2000;
    private _minProtein: number = 50;
    private _maxCarbs: number = 250;
    private _maxFat: number = 70;

    constructor() {
        super();
    }

    get maxCalories(): number {
        return this._maxCalories;
    }

    set maxCalories(value: number) {
        if (this._maxCalories !== value) {
            this._maxCalories = value;
            this.notifyPropertyChange('maxCalories', value);
        }
    }

    get minProtein(): number {
        return this._minProtein;
    }

    set minProtein(value: number) {
        if (this._minProtein !== value) {
            this._minProtein = value;
            this.notifyPropertyChange('minProtein', value);
        }
    }

    get maxCarbs(): number {
        return this._maxCarbs;
    }

    set maxCarbs(value: number) {
        if (this._maxCarbs !== value) {
            this._maxCarbs = value;
            this.notifyPropertyChange('maxCarbs', value);
        }
    }

    get maxFat(): number {
        return this._maxFat;
    }

    set maxFat(value: number) {
        if (this._maxFat !== value) {
            this._maxFat = value;
            this.notifyPropertyChange('maxFat', value);
        }
    }

    onSaveGoals() {
        // Save goals to app settings or storage
        console.log('Saving dietary goals:', {
            maxCalories: this._maxCalories,
            minProtein: this._minProtein,
            maxCarbs: this._maxCarbs,
            maxFat: this._maxFat
        });
    }
}