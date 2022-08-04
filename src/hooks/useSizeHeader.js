import { useState, useEffect } from 'react';

export const useSizeHeader = () => {
  const [heightHeader, setHeightHeader] = useState(null);

  useEffect(() => {
    const getHeight = () =>
      document.body?.lastElementChild?.firstChild?.getHeight;

    setHeightHeader(getHeight());

    window.addEventListener('resize', () => setHeightHeader(getHeight()));
    return () =>
      window.removeEventListener('resize', () => setHeightHeader(getHeight()));
  }, [heightHeader]);

  return heightHeader;
};
