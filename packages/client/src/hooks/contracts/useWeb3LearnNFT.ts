import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';

import Web3LearnNFTContractABI from '@/libs/hardhat/artifacts/contracts/SBT2.sol/Web3LearnNFT.json';
import type { Web3LearnNFT as Web3LearnNFTType } from '@/libs/hardhat/types';
import { NFT } from '@/types/contract';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = Web3LearnNFTContractABI.abi;

type Props = {
  user?: string;
};

type ReturnUseWeb3LearnNFTContract = {
  mining: boolean;
  handleMint: (_to: string, _title: string, _url: string) => void;
  userNFT: NFT[] | undefined;
};

export const useWeb3LearnNFTContract = ({
  user,
}: Props): ReturnUseWeb3LearnNFTContract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);
  const [userNFT, setUserNFT] = useState<NFT[]>();

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
    async (to: string, title: string, url: string) => {
      try {
        if (!Web3LearnNFTContract) return;
        const mint = await Web3LearnNFTContract.mint(to, title, url);
        setMining(true);
        await mint.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [Web3LearnNFTContract]
  );

  const handleGetNFT = useCallback(async () => {
    try {
      if (!Web3LearnNFTContract) return;
      if (!user) return;
      const getNFT = await Web3LearnNFTContract.getNFT(user);
      if (!getNFT) return;
      setUserNFT(getNFT);
    } catch (error) {
      console.error(error);
    }
  }, [Web3LearnNFTContract, user]);

  useEffect(() => {
    handleGetNFT();
  }, [handleGetNFT]);

  return {
    mining,
    handleMint,
    userNFT,
  };
};
