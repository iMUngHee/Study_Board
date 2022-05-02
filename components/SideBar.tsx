import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import useUser from '../lib/client/useUser';

const SideBar: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <div className="hidden h-screen w-80 items-center justify-between bg-purple-700 lg:flex lg:flex-col">
      <div className="mt-20 flex w-full flex-col items-center justify-center">
        <div className="mb-10">
          <div className="mt-2 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{user?.name}</span>
          </div>
        </div>
        <div className="w-full text-lg font-bold text-white">
          <div
            className="group flex h-20 w-full cursor-pointer items-center transition-all hover:bg-purple-400"
            onClick={() => router.push('/')}
          >
            <div className="invisible h-16 w-4 rounded-tr-xl rounded-br-xl bg-purple-100 group-hover:visible" />
            <div className="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="pl-5">TIL</span>
          </div>
          <div
            className="group flex h-20 w-full cursor-pointer items-center transition-colors hover:bg-purple-400"
            onClick={() => router.push('/grass')}
          >
            <div className="invisible h-16 w-4 rounded-tr-xl rounded-br-xl bg-purple-100 group-hover:visible" />
            <div className="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <span className="pl-5">Grass</span>
          </div>
        </div>
      </div>
      <div>
        <div
          className="mb-20 cursor-pointer transition-all hover:rotate-180"
          onClick={() => router.push('/setting')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-cyan-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
