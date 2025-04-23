// Analytics utility for Google Analytics 4 (GA4)
'use client'

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Initialize GA4 - call this in your root layout
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID)
  }
  return null
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, params: object) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, params)
  }
}

// Common event types
export const Events = {
  CLICK: 'click',
  FORM_SUBMIT: 'form_submit',
  LINK_CLICK: 'link_click',
  AD_CLICK: 'ad_click',
  AD_VIEW: 'ad_view',
}