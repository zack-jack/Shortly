/* eslint-disable react-hooks/exhaustive-deps */
import {
  useCallback,
  useEffect,
  useState,
} from 'react';

const useCopyToClipboard = (text, notifyTimeout = 2500) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  }, []);

  useEffect(() => {
    if (!copied) return null;

    const timer = setTimeout(() => setCopied(false), notifyTimeout);

    return () => clearTimeout(timer);
  }, [copied]);

  return [copied, copyToClipboard];
};

export default useCopyToClipboard;
