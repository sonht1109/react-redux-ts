/*
 *
 * Home
 *
 */

import { Checkbox, Radio } from 'components/Input';
import Layout from 'components/Layout';
import useDisclosure from 'hooks/useDisclosure';
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

  const [state, handler] = useDisclosure(false);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register('phone', { required: true })} />
        </div>
        <div>
          <input type="text" {...register('password', { required: true })} />
        </div>
        <button type="submit">SUBMIT</button>
      </form>

      <Radio checked={state} onChange={handler.toggle} />
      <Checkbox checked={state} onChange={handler.toggle} />
    </Layout>
  );
}

export default memo(Home);
