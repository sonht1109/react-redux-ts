import { useEffect, useRef } from 'react';

const useDidUpdate = (cb: () => void, deps?: any[]) => {
  const refMounted = useRef<boolean>(false);

  useEffect(() => {
    if (refMounted.current) {
      cb();
    } else {
      refMounted.current = true;
    }
  }, deps);
};

export default useDidUpdate;
