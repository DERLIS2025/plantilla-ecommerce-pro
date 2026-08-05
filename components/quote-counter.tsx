'use client';

import { useEffect, useState } from 'react';

import { getQuoteItems } from '@/lib/quote-storage';

export function QuoteCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const items = getQuoteItems();
      const total = items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      setCount(total);
    };

    updateCount();

    window.addEventListener(
      'portal-verde-quote-updated',
      updateCount
    );

    window.addEventListener('storage', updateCount);

    return () => {
      window.removeEventListener(
        'portal-verde-quote-updated',
        updateCount
      );

      window.removeEventListener('storage', updateCount);
    };
  }, []);

  return (
    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-700 px-1 text-[10px] font-bold text-white">
      {count > 99 ? '99+' : count}
    </span>
  );
}
