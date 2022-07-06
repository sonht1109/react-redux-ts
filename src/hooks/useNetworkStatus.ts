import { useState } from 'react';
import useWindowEvent from './useWindowEvent';

export default function useNetworkStatus() {
  const [status, setStatus] = useState(true);

  useWindowEvent('online', () => setStatus(true));
  useWindowEvent('offline', () => setStatus(false));

  return status;
}
