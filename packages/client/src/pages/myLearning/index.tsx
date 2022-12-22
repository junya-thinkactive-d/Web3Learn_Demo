import React, { useCallback, useEffect, useState } from "react";

import { MintContent } from "@/components/pages/myLearning";
import { Container } from "@/components/shared";
import { useWalletContext } from "@/context";
import { useWeb3LearnContract } from "@/hooks/contracts";
import { contentsData } from "@/mock";
import { Content } from "@/types/content";

const MyLearning = () => {
  const walletContext = useWalletContext();
  const userAddress = walletContext?.currentAccount;
  const { buyList } = useWeb3LearnContract({ userAddress });
  const [buyContents, setBuyContents] = useState<Content[]>([]);

  const getBuyList = useCallback(async () => {
    const currentAccountBuyContents: Content[] = [];
    for (let i = 0; i < buyList.length; i++) {
      contentsData.map((content) => {
        if (buyList[i] === content.id) {
          currentAccountBuyContents.push(content);
        }
      });
    }
    setBuyContents(currentAccountBuyContents);
  }, [buyList]);

  useEffect(() => {
    getBuyList();
  }, [getBuyList]);

  return (
    <>
      <Container>
        <div className="flex justify-between items-start">
          {buyContents.map((content, i) => (
            <div key={i}>
              <MintContent content={content} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default MyLearning;
