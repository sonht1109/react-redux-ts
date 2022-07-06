import { useEffect } from 'react';
import useDidUpdate from './useDidUpdate';

export default function useLogger(componentName: string, props: any[] = []) {
  useEffect(() => {
    console.log(`-- ${componentName} mounted`, ...props);
    return () => console.log(`-- ${componentName} unmounted`);
  }, []);

  useDidUpdate(() => {
    console.log(`-- ${componentName} updated`, ...props);
  }, props);
}
