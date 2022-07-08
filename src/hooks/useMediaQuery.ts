import { useEffect, useState } from 'react';

const attachMediaQueryListener = (
  query: MediaQueryList,
  cb: (e: MediaQueryListEvent) => void,
) => {
  try {
    query.addEventListener('change', cb);
    return () => query.removeEventListener('change', cb);
  } catch (err) {
    query.addListener(cb);
    return () => query.addListener(cb);
  }
};

const getInitValue = (query: string, initValue?: boolean) => {
  if (initValue !== undefined) {
    return initValue;
  }
  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches;
  }
  return false;
};

export default function useMediaQuery(
  query: string,
  initValue?: boolean,
): boolean {
  const [matches, setMatches] = useState(getInitValue(query, initValue));

  useEffect(() => {
    if ('matchMedia' in window) {
      const mql = window.matchMedia(query);
      setMatches(mql.matches);
      attachMediaQueryListener(mql, e => setMatches(e.matches));
    }
  }, [query]);

  return matches;
}
