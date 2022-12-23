import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';

import { WEB3LEARN_CONTRACT_ADDRESS } from '@/constants';
import Web3LearnContractABI from '@/libs/hardhat/artifacts/contracts/DemoWeb3Learn.sol/Web3Learn.json';
import type { Web3Learn as Web3LearnType } from '@/libs/hardhat/types';
import { Split } from '@/types/contract';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = WEB3LEARN_CONTRACT_ADDRESS;
const CONTRACT_ABI = Web3LearnContractABI.abi;

type Props = { userAddress?: string };

type ReturnUseWeb3LearnContract = {
  mining: boolean;
  popupSign:boolean;
  handleClaimReward: (_token: string, _amount: number) => void;
  handleBuy: (
    _amount: number,
    _id: number,
    _token: string,
    _splits: Split[]
  ) => void;
  buyList: number[];
};

export const useWeb3LearnContract = ({
  userAddress,
}: Props): ReturnUseWeb3LearnContract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);
  const [popupSign, setPopupSign] = useState<boolean>(false);
  const [buyList, setBuyList] = useState<number[]>([]);

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

  const handleGetByList = useCallback(async () => {
    try {
      if (!Web3LearnContract) return;
      if (!userAddress) return;
      const getBuyList = await Web3LearnContract.getBuyLists(userAddress);
      const formatBuyList: number[] = [];
      getBuyList.map((buyList) => {
        const numberBuyList = buyList.toNumber() + 1;
        formatBuyList.push(numberBuyList);
      });
      setBuyList(formatBuyList);
    } catch (error) {
      console.error(error);
    }
  }, [Web3LearnContract, userAddress]);

  const handleClaimReward = useCallback(
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
    async (amount: number, id: number, token: string, splits: Split[]) => {
      try {
        if (!Web3LearnContract) return;
        const buy = await Web3LearnContract.buy(
          ethers.utils.parseEther(`${amount}`),
          id - 1,
          token,
          splits,
          {
            gasLimit: 500000,
          }
        );
        setMining(true);
        await buy.wait();
        setMining(false);
        setPopupSign(true);
        setTimeout(() => {
          setPopupSign(false), 5000;
        });
      } catch (error) {
        setMining(false);
        setPopupSign(false);
        console.error(error);
      }
    },
    [Web3LearnContract]
  );

  useEffect(() => {
    handleGetByList();
  }, [handleGetByList]);

  return {
    mining,
    popupSign,
    handleClaimReward,
    handleBuy,
    buyList,
  };
};
