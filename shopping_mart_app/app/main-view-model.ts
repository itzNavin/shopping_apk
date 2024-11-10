import { Frame, Observable } from '@nativescript/core';
import { ScannerService } from './services/scanner.service';

export class MainViewModel extends Observable {
    private scannerService: ScannerService;
    private _statusMessage: string = '';
    private _showCategories: boolean = false;
    private _categories: Array<{ name: string, percentage: number }> = [];

    constructor() {
        super();
        this.scannerService = new ScannerService();
    }

    get statusMessage(): string {
        return this._statusMessage;
    }

    set statusMessage(value: string) {
        if (this._statusMessage !== value) {
            this._statusMessage = value;
            this.notifyPropertyChange('statusMessage', value);
        }
    }

    get showCategories(): boolean {
        return this._showCategories;
    }

    set showCategories(value: boolean) {
        if (this._showCategories !== value) {
            this._showCategories = value;
            this.notifyPropertyChange('showCategories', value);
        }
    }

    get categories(): Array<{ name: string, percentage: number }> {
        return this._categories;
    }

    set categories(value: Array<{ name: string, percentage: number }>) {
        if (this._categories !== value) {
            this._categories = value;
            this.notifyPropertyChange('categories', value);
        }
    }

    onSetGoals() {
        Frame.topmost().navigate({
            moduleName: 'components/dietary-goals/dietary-goals'
        });
    }

    async onScanQR() {
        try {
            const result = await this.scannerService.scanQRCode();
            this.statusMessage = 'QR Code scanned successfully!';
            this.showCategories = true;
            this.categories = [
                { name: 'Vegetables', percentage: 40 },
                { name: 'Fruits', percentage: 40 },
                { name: 'Dry Fruits', percentage: 20 }
            ];
        } catch (error) {
            this.statusMessage = `Error scanning QR code: ${error.message}`;
        }
    }

    onGenerateList() {
        const totalPercentage = this._categories.reduce((sum, category) => sum + category.percentage, 0);
        if (totalPercentage !== 100) {
            this.statusMessage = 'Category percentages must add up to 100%';
            return;
        }
        this.statusMessage = 'Generating your personalized shopping list...';
    }
}