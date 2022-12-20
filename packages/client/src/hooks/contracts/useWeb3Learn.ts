import { useCallback, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import Web3LearnContractABI from '@/libs/hardhat/artifacts/contracts/Web3LearnPub.sol/Web3Learn.json';
import type { Web3Learn as Web3LearnType } from '@/libs/hardhat/types';
import { Split } from '@/types/contract';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0xa8d75c1f7D50Eae9a7CD55b6B3176703F7dB4ED5';
const CONTRACT_ABI = Web3LearnContractABI.abi;

type Props = {};

type ReturnUseWeb3LearnContract = {
  mining:boolean;
  handleClimeReward: (_token: string, _amount: number) => void;
  handleBuy: (_amount: number, _token: string, _splits: Split[]) => void;
};

export const useWeb3LearnContract = ({}: Props): ReturnUseWeb3LearnContract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);

  const Web3LearnContract: Web3LearnType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    ) as Web3LearnType;
  }, [ethereum]);

  const handleClimeReward = useCallback(
    async (token: string, amount: number) => {
      try {
        if (!Web3LearnContract) return;
        const claimReward = await Web3LearnContract.claimReward(
          token,
          ethers.utils.parseEther(`${amount}`)
        );
        setMining(true);
        await claimReward.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
        setMining(false);
      }
    },
    [Web3LearnContract]
  );

  const handleBuy = useCallback(
    async (amount: number, token: string, splits: Split[]) => {
      try {
        if (!Web3LearnContract) return;
        const buy = await Web3LearnContract.buy(
          ethers.utils.parseEther(`${amount}`),
          token,
          splits,{gasLimit:50000}
        );
        setMining(true);
        await buy.wait();
        setMining(false);
      } catch (error) {
        setMining(false)
        console.error(error);
      }
    },
    [Web3LearnContract]
  );

  return {
    mining,
    handleClimeReward,
    handleBuy,
  };
};
