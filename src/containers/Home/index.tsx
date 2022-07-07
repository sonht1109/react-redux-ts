/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { range } from 'utils';

interface Props {}

type LoginFormData = {
  phone: string;
  password: string;
};

function Home({}: Props) {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    toast.success(JSON.stringify(data));
  };

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
    </ErrorBound>
  );
}

export default memo(Home);
