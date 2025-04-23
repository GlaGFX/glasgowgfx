// Type declarations for Google Analytics 4 (GA4)
interface Window {
  dataLayer: Record<string, any>[];
  gtag: (...args: any[]) => void;
}
