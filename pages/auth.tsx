import { NextPage } from 'next';
import React from 'react';

const Auth: NextPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex items-center justify-center">
        <form>
          <label className="absolute left-0 flex h-full items-center justify-center pl-3">
            <span className="text-md text-center text-gray-300">code</span>
          </label>
          <input className="rounded-md border-2 border-amber-300 px-14 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2" />
        </form>
      </div>
    </div>
  );
};

export default Auth;
