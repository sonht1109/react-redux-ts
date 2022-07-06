/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useDisclosure from 'hooks/useDisclosure';
import useDidUpdate from 'hooks/useDidUpdate';

interface Props {}

type LoginFormData = {
  phone: string;
  password: string;
};
// eslint-disable-next-line
function Home({}: Props) {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    toast.success('Welcome');
  };

  const [state, handler] = useDisclosure(false, {
    onClose: () => {
      console.log('CLOSE');
    },
  });

  useDidUpdate(() => {
    console.log('UPDATED');
    return () => {
      console.log("UNMOUNT")
    }
  }, [state]);

  return (
    <ErrorBound>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" name="phone" ref={register({ required: true })} />
        </div>
        <div>
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <button onClick={handler.toggle}>{state ? 'CLOSE' : 'OPEN'}</button>
    </ErrorBound>
  );
}

export default memo(Home);
