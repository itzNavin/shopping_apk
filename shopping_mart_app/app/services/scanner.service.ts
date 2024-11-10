import { BarcodeScanner } from 'nativescript-barcodescanner';

export class ScannerService {
    private barcodeScanner: BarcodeScanner;

    constructor() {
        this.barcodeScanner = new BarcodeScanner();
    }

    async scanQRCode(): Promise<string> {
        const available = await this.barcodeScanner.available();
        if (!available) {
            throw new Error('Barcode scanner not available');
        }

        const hasPermission = await this.barcodeScanner.hasCameraPermission();
        if (!hasPermission) {
            const granted = await this.barcodeScanner.requestCameraPermission();
            if (!granted) throw new Error('Camera permission denied');
        }

        const result = await this.barcodeScanner.scan({
            formats: "QR_CODE",
            message: "Scan the store QR code",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500
        });

        return result.text;
    }
}