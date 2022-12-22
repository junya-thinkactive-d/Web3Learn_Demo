import React, { useCallback, useEffect, useState } from "react";

import { NFTContent } from "@/components/pages/nft";
import { Container } from "@/components/shared";
import { useWalletContext } from "@/context";
import { useWeb3LearnNFTContract } from "@/hooks/contracts";
import { contentsData } from "@/mock";
import { Content } from "@/types/content";

const NFT = () => {
  const walletContext = useWalletContext();
  const currentAccount = walletContext?.currentAccount;
  const { userNFT } = useWeb3LearnNFTContract({ currentAccount });
  const [nftContents, setNftContents] = useState<Content[]>([]);

  const getUserNFT = useCallback(async () => {
    const currentAccountNFTContents: Content[] = [];
    for (let i = 0; i < userNFT.length; i++) {
      contentsData.map((content) => {
        if (userNFT[i].id === content.id) {
          currentAccountNFTContents.push(content);
        }
      });
    }
    setNftContents(currentAccountNFTContents);
  }, [userNFT]);

  useEffect(() => {
    getUserNFT();
  }, [getUserNFT]);

  return (
    <>
      <Container>
        <div className="flex">
          {nftContents.map((content, i) => (
            <div key={i}>
              <NFTContent content={content} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default NFT;
