import React, { useCallback } from 'react';

import { useRouter } from 'next/router';

type Props = {
  popup: boolean;
  popupSign: boolean;
  message: string;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Popup = ({ popup,popupSign, message, setPopup, setMessage }: Props) => {
  const router = useRouter();

  const handleOnClick = useCallback(async () => {
    setPopup(false);
    setMessage('');
    router.reload();
  }, [router, setMessage, setPopup]);

  return (
    <>
      {popup && popupSign && (
        <div className='fixed top-10 left-0 right-0 flex justify-center items-center duration-300'>
          <div className='relative w-96 h-44 bg-white p-4 shadow-lg'>
            <div className='text-blue-400 text-2xl'>{message}</div>
            <div className='absolute right-4 bottom-4'>
              <button
                className='text-white px-4 py-2 text-lg rounded-md bg-blue-600 hover:bg-blue-400'
                onClick={handleOnClick}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
