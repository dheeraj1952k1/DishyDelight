import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency || 'USD', // Fallback to USD if currency is undefined
      }).format(price);
    } catch (error) {
      console.error('Error formatting price:', error);
      return 'Invalid price';
    }
  };

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-US',
  currency: 'USD',
};
