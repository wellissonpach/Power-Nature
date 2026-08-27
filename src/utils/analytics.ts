// Google Analytics 4 & Custom Pixel Event Tracker

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventName =
  | 'page_view'
  | 'view_product'
  | 'view_product_catalog'
  | 'view_product_detail_page'
  | 'header_explore_products'
  | 'click_buy'
  | 'click_buy_cta'
  | 'click_buy_orderbump'
  | 'toggle_order_bump'
  | 'click_instagram'
  | 'faq_open'
  | 'scroll_50'
  | 'scroll_90'
  | 'open_nutrition_modal'
  | 'select_pack';

export function trackEvent(eventName: AnalyticsEventName, params: Record<string, unknown> = {}) {
  // Push to dataLayer if available
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    } else if (window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...params });
    }
  }

  // Developer logging for verification
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📊 [Analytics Event] ${eventName}`, params);
  }
}
