import React from 'react';
import ContentLoader from 'react-content-loader';

export default function PizzasLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      >
      <circle cx="136" cy="138" r="134" />
      <rect x="3" y="292" rx="0" ry="0" width="269" height="28" />
      <rect x="-5" y="340" rx="0" ry="0" width="284" height="84" />
      <rect x="8" y="443" rx="0" ry="0" width="120" height="13" />
    </ContentLoader>
  );
}
