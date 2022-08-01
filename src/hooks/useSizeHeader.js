import { useState, useEffect } from 'react';

export const useSizeHeader = () => {
  const [sizeHeader, setSizeHeader] = useState(null);

  useEffect(() => {
    const clientHeight = () =>
      document.body?.lastElementChild?.firstChild?.clientHeight;

    setSizeHeader(clientHeight());

    window.addEventListener('resize', () => setSizeHeader(clientHeight()));
    return () =>
      window.removeEventListener('resize', () => setSizeHeader(clientHeight()));
  }, [sizeHeader]);

  return sizeHeader;
};
