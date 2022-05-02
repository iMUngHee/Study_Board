import { TIL } from '@prisma/client';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { CircleLoader } from 'react-spinners';
import useSWR from 'swr';
import useMutation from '../lib/client/useMutation';
import useUser from '../lib/client/useUser';

interface UploadTilFORM {
  title: string;
}

interface UploadTilMutation {
  ok: boolean;
}

interface TilExtends extends TIL {
  user: {
    name: string;
  };
}

interface TilResponse {
  ok: boolean;
  tils: TilExtends[];
}

const Home: NextPage = () => {
  const { user } = useUser();
  const { register, handleSubmit, reset } = useForm<UploadTilFORM>();
  const [upload, { loading }] = useMutation<UploadTilMutation>('/api/til');
  const { data: tils, mutate } = useSWR<TilResponse>('/api/til');
  const onValid = async ({ title }: UploadTilFORM) => {
    if (loading) return;
    upload({ title });
    reset();
  };
  return (
    <>
      {tils ? (
        <div className="flex h-full w-full flex-col lg:flex-row lg:items-stretch lg:justify-start">
          <div className="w-full lg:w-1/2">
            <div className="h-full w-full">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="mt-2 flex h-full max-h-[740px] min-h-[200px] w-11/12 flex-col items-center justify-center rounded-lg border-2 border-purple-400 lg:h-4/5 lg:w-4/5">
                  <div className="w-full flex-1 overflow-y-auto px-5 py-3 scrollbar-hide">
                    {tils?.tils?.map((til) => {
                      const day = til.createAt;
                      const update = String(day).split('T')[0];
                      const month = String(update).split('-')[1];
                      const date = String(update).split('-')[2];
                      return (
                        <div
                          key={til.id}
                          className="flex w-full justify-between"
                        >
                          <span className="flex-1">{til.title}</span>
                          <span>
                            <span className="mr-2">{til.user?.name}</span>
                            <span>
                              {month}/{date}
                            </span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <div className="mt-3 lg:mt-10">
              <span className="text-2xl font-bold lg:text-4xl">
                Today I Learned...
              </span>
            </div>
            <form
              className="mt-2 w-full px-20"
              onSubmit={handleSubmit(onValid)}
            >
              <div className="flex flex-col lg:mt-5">
                <label className="font-bold">Write Here</label>
                <input
                  {...register('title', { required: true })}
                  className="mt-2 rounded-md border-2 border-dashed border-gray-300 p-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex w-full items-center justify-center">
                <button className=" mt-6 w-20 rounded-lg bg-purple-400 py-2 px-4 text-center text-white hover:bg-purple-200">
                  {loading ? 'Loading' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <CircleLoader />
        </div>
      )}
    </>
  );
};

export default Home;
