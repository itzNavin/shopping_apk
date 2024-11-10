import { Observable } from '@nativescript/core';
import { DietaryGoal, Product, ShoppingList } from '../models/dietary-goal.model';
import { QRScannerService } from '../services/qr-scanner.service';
import { ProductService } from '../services/product.service';

export class MainViewModel extends Observable {
  private qrScanner: QRScannerService;
  private productService: ProductService;
  private _currentGoal: DietaryGoal | null = null;
  private _shoppingList: ShoppingList | null = null;

  constructor() {
    super();
    this.qrScanner = new QRScannerService();
    this.productService = new ProductService();
  }

  async scanStoreCatalog() {
    const qrData = await this.qrScanner.scanQRCode();
    const products = await this.productService.fetchProductCatalog(qrData);
    this.notifyPropertyChange('catalogLoaded', true);
  }

  setDietaryGoal(goal: DietaryGoal) {
    this._currentGoal = goal;
    this.notifyPropertyChange('currentGoal', goal);
  }

  generateShoppingList() {
    // Implementation for generating shopping list based on goals
    this._shoppingList = {
      products: [],
      totalPrice: 0,
      qrCode: ''
    };
    this.notifyPropertyChange('shoppingList', this._shoppingList);
  }

  get currentGoal(): DietaryGoal | null {
    return this._currentGoal;
  }

  get shoppingList(): ShoppingList | null {
    return this._shoppingList;
  }
}