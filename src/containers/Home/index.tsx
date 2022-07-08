/*
 *
 * Home
 *
 */

import Layout from 'components/Layout';
import useOS from 'hooks/useOS';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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

  useOS()

  return (
    <Layout>
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
    </Layout>
  );
}

export default memo(Home);
