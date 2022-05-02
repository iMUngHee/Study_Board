import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CircleLoader } from 'react-spinners';
import useMutation from '../lib/client/useMutation';
import useUser from '../lib/client/useUser';

interface LoginForm {
  code: string;
}

interface MutationResult {
  ok: boolean;
}

const Auth: NextPage = () => {
  const router = useRouter();
  const { isLoading } = useUser();
  const [login, { loading, data }] = useMutation<MutationResult>('/api/user');
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (validForm: LoginForm) => {
    if (loading) return;
    login(validForm);
  };

  useEffect(() => {
    if (isLoading) return;
    if (data?.ok) {
      router.push('/');
    }
  }, [router, data, isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <CircleLoader />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex items-center justify-center">
            <form onSubmit={handleSubmit(onValid)}>
              <label
                id="code"
                className="absolute left-0 flex h-full items-center justify-center pl-3"
              >
                <span className="text-md text-center text-gray-300">code</span>
              </label>
              <input
                id="code"
                type="password"
                className="rounded-md border-2 border-purple-500 px-14 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register('code')}
                required
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
