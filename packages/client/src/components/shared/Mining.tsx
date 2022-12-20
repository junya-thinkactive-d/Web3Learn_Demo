import React from 'react';

type Props = {
  mining: boolean;
};

const Mining = ({ mining }: Props) => {
  return (
    <>
      {mining && (
        <div className="z-50 w-screen h-full fixed top-0 left-0 flex flex-col justify-center items-center bg-stone-700 bg-opacity-75">
          <div className="animate-spin h-10 w-10 border-4 border-white rounded-full border-t-transparent"></div>
          <div className="text-blue-400 text-2xl">now minting...</div>
        </div>
      )}
    </>
  );
};

export default Mining;
