import React, { useCallback } from "react";

import { Button, MarketContent, Mining } from "@/components/shared";
import { useWalletContext } from "@/context";
import { useWeb3LearnNFTContract } from "@/hooks/contracts";
import { Content } from "@/types/content";

type Props = {
  content: Content;
};

const MintContent = ({ content }: Props) => {
  const walletContext = useWalletContext();
  const currentAccount = walletContext?.currentAccount;
  const { mining, handleMint, isMinted } = useWeb3LearnNFTContract({
    currentAccount,
  });

  const handleOnClick = useCallback(() => {
    if (!currentAccount) return;
    handleMint(content.id, currentAccount, content.title, content.imgUrl);
  }, [content.id, content.imgUrl, content.title, currentAccount, handleMint]);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Mining mining={mining} />
        <MarketContent
          id={content.id}
          imgUrl={content.imgUrl}
          title={content.title}
          description={content.description}
        />
        {isMinted[content.id - 1] === true ? (
          <>
            <div className="text-2xl text-white bg-amber-400 p-4">
              Already minted!
            </div>
          </>
        ) : (
          <>
            <div className="mt-12">
              <Button
                onClick={handleOnClick}
                buttonName="Mint"
                className="bg-green-500 text-white"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MintContent;
