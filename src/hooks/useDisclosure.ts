import { useState } from 'react';

export default function useDisclosure(
  initState: boolean,
  cb?: { onOpen?: () => void; onClose?: () => void },
) {
  const [state, setState] = useState(initState);

  const open = () => {
    if (!state) {
      setState(true);
      cb?.onOpen?.();
    }
  };

  const close = () => {
    if (state) {
      setState(false);
      cb?.onClose?.();
    }
  };

  const toggle = state ? close : open;

  return { state, handler: { open, close, toggle } };
}
