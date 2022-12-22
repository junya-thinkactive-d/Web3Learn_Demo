import React from "react";

import { useWalletContext } from "@/context";

const ConnectWalletButton = () => {
  const walletContext = useWalletContext();

  return (
    <div className="rounded-xl bg-gradient-to-r from-cherGreen to-cherBlue p-[3px] ">
      <div className="bg-primary rounded-xl ">
        {!walletContext?.currentAccount ? (
          <button
            className="px-4 py-2 flex justify-center items-center text-white text-xl bg-stone-800 hover:bg-white hover:text-stone-800 hover:duration-300"
            onClick={walletContext?.connectWallet}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 pr-1 border-r"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
            <div>CONFECT WALLET</div>
          </button>
        ) : (
          <div className="px-4 py-2 flex justify-center items-center text-stone-800 text-xl bg-white">
            CONNECTED!
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectWalletButton;
