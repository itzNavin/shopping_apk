import { Observable, Camera, ImageAsset } from '@nativescript/core';
import { QRCodeScanner } from '@nativescript-community/ui-qrcode-scanner';
import { QRGenerator } from '@nativescript-community/ui-qrcode';

export class QRScannerService extends Observable {
  private scanner: QRCodeScanner;
  private generator: QRGenerator;

  constructor() {
    super();
    this.scanner = new QRCodeScanner();
    this.generator = new QRGenerator();
  }

  async scanQRCode(): Promise<string> {
    try {
      const result = await this.scanner.scan({
        message: 'Scan store QR code',
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true
      });

      return result.text;
    } catch (error) {
      console.error('QR scanning error:', error);
      throw error;
    }
  }

  generateQRCode(data: string): string {
    try {
      return this.generator.createQRCode({
        text: data,
        width: 300,
        height: 300,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctionLevel: 'M'
      });
    } catch (error) {
      console.error('QR generation error:', error);
      throw error;
    }
  }
}