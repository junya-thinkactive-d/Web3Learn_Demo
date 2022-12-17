import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';

import SoulBoundTestABI from '@/libs/hardhat/artifacts/contracts/SBT.sol/SoulBoundTest.json';
import type { SoulBoundTest as SoulBoundTestType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = SoulBoundTestABI.abi;

type Props = {
  tokenId?: string;
};

type ReturnUseSoulBoundTestContract = {};

export const useSoulBoundTestContract = ({
  tokenId,
}: Props): ReturnUseSoulBoundTestContract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);
  const [tokenURI, setTokenURI] = useState<string>('');

  const SoulBoundTestContract: SoulBoundTestType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    ) as SoulBoundTestType;
  }, [ethereum]);

  const handleSafeMint = useCallback(
    async (to: string, uri: string) => {
      try {
        if (!SoulBoundTestContract) return;
        const safeMint = await SoulBoundTestContract.safeMint(to, uri);
        setMining(true);
        await safeMint.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [SoulBoundTestContract]
  );

  const getTokenURI = useCallback(async () => {
    try {
      if (!SoulBoundTestContract) return;
      if (!tokenId) return;
      const tokenURI = await SoulBoundTestContract.tokenURI(tokenId);
      setTokenURI(tokenURI);
    } catch (error) {
      console.error(error);
    }
  }, [SoulBoundTestContract, tokenId]);

  useEffect(() => {
    getTokenURI;
  }, [getTokenURI]);

  return {
    mining,
    handleSafeMint,
    tokenURI,
  };
};
