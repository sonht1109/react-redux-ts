/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { useForm } from 'react-hook-form';
import Loading from 'components/Loading';

interface Props {}

type LoginFormData = {
  phone: string;
  password: string;
};
// eslint-disable-next-line
function Home({}: Props) {

  const { register, handleSubmit } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
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
        <button type="submit">Login test</button>
      </form>
      <Loading />
    </ErrorBound>
  );
}

export default memo(Home);
