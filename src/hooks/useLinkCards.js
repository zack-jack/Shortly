/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

const useLinkCards = () => {
  const storageKey = 'shortly-cards';
  const [linkCards, setLinkCards] = useState(() => {
    try {
      return JSON.parse(window.sessionStorage.getItem(storageKey) || '[]');
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    window.sessionStorage.setItem(storageKey, JSON.stringify(linkCards));
  }, [linkCards]);

  const addLinkCards = useCallback((linkCard) => {
    setLinkCards([linkCard, ...linkCards]);
  }, []);

  return [linkCards, addLinkCards];
};

export default useLinkCards;
