import { useCallback, useMemo, useState, useEffect } from "react";

import { ethers } from "ethers";

import { WEB3LEARN_NFT_CONTRACT_ADDRESS } from "@/constants";
import Web3LearnNFTContractABI from "@/libs/hardhat/artifacts/contracts/SBT_DEMO.sol/Web3LearnNFT.json";
import type { Web3LearnNFT as Web3LearnNFTType } from "@/libs/hardhat/types";
import { getEthereumSafety } from "@/utils";

const CONTRACT_ADDRESS = WEB3LEARN_NFT_CONTRACT_ADDRESS;
const CONTRACT_ABI = Web3LearnNFTContractABI.abi;

type Props = {
  currentAccount?: string;
};

type FormatNFT = {
  id: number;
  title: string;
  url: string;
};

type ReturnUseWeb3LearnNFTContract = {
  mining: boolean;
  popupSign: boolean;
  handleMint: (_id: number, _to: string, _title: string, _url: string) => void;
  userNFT: FormatNFT[];
  isMinted: boolean[];
};

export const useWeb3LearnNFTContract = ({
  currentAccount,
}: Props): ReturnUseWeb3LearnNFTContract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);
  const [popupSign, setPopupSign] = useState<boolean>(false);
  const [userNFT, setUserNFT] = useState<FormatNFT[]>([]);
  const [isMinted, setIsMinted] = useState<boolean[]>([]);

  const Web3LearnNFTContract: Web3LearnNFTType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    ) as Web3LearnNFTType;
  }, [ethereum]);

  const handleMint = useCallback(
    async (id: number, to: string, title: string, url: string) => {
      try {
        if (!Web3LearnNFTContract) return;
        const mint = await Web3LearnNFTContract.mint(id - 1, to, title, url, {
          gasLimit: 500000,
        });
        setMining(true);
        await mint.wait();
        setMining(false);
        setPopupSign(true);
        setTimeout(() => {
          setPopupSign(false), 5000;
        });
      } catch (error) {
        console.error(error);
      }
    },
    [Web3LearnNFTContract]
  );

  const handleGetNFT = useCallback(async () => {
    try {
      if (!Web3LearnNFTContract) return;
      if (!currentAccount) return;
      const getNFT = await Web3LearnNFTContract.getNFT(currentAccount);
      const formatNFT = getNFT.map((nft) => {
        return {
          id: nft.id.toNumber() + 1,
          title: nft.title,
          url: nft.url,
        };
      });
      if (!formatNFT) return;
      setUserNFT(formatNFT);
    } catch (error) {
      console.error(error);
    }
  }, [Web3LearnNFTContract, currentAccount]);

  const handleGetIsMint = useCallback(async () => {
    try {
      if (!Web3LearnNFTContract) return;
      if (!currentAccount) return;
      const getIsMint = await Web3LearnNFTContract.getIsMint(currentAccount);
      setIsMinted(getIsMint);
    } catch (error) {
      console.error(error);
    }
  }, [Web3LearnNFTContract, currentAccount]);

  useEffect(() => {
    handleGetNFT();
    handleGetIsMint();
  }, [handleGetIsMint, handleGetNFT]);

  return {
    mining,
    popupSign,
    handleMint,
    userNFT,
    isMinted,
  };
};
