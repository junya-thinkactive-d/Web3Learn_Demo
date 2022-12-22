import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';

import { WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS } from '@/constants';
import Web3LearnDemoTokenABI from '@/libs/hardhat/artifacts/contracts/Web3LearnDemoToken.sol/Web3LearnDemoToken.json';
import type { Web3LearnDemoToken as Web3LearnDemoTokenType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS;
const CONTRACT_ABI = Web3LearnDemoTokenABI.abi;

type Props = {
  userAddress: string | undefined;
  contractAddress: string;
};

type ReturnUseWeb3LearnContract = {
  tokenMining: boolean;
  handleApprove: (_contractAddress: string) => void;
  isAllowance: boolean;
};

export const useWeb3LearnDemoToken = ({
  userAddress,
  contractAddress,
}: Props): ReturnUseWeb3LearnContract => {
  const ethereum = getEthereumSafety();
  const [tokenMining, setTokenMining] = useState<boolean>(false);
  const [isAllowance, setIsAllowance] = useState<boolean>(false);

  const Web3LearnDemoToken: Web3LearnDemoTokenType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    ) as Web3LearnDemoTokenType;
  }, [ethereum]);

  const handleApprove = useCallback(
    async (contractAddress: string) => {
      try {
        if (!Web3LearnDemoToken) return;
        const approve = await Web3LearnDemoToken.approve(
          contractAddress,
          ethers.constants.MaxUint256
        );
        setTokenMining(true);
        await approve.wait();
        setTokenMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [Web3LearnDemoToken]
  );

  const handleAllowance = useCallback(async () => {
    try {
      if (!Web3LearnDemoToken) return;
      if (!userAddress) return;
      const allowance = await Web3LearnDemoToken.allowance(
        userAddress,
        contractAddress
      );
      setIsAllowance(allowance > ethers.utils.parseEther('0') ? true : false);
    } catch (error) {
      console.error(error);
    }
  }, [Web3LearnDemoToken, contractAddress, userAddress]);

  useEffect(() => {
    handleAllowance();
  }, [handleAllowance]);

  return {
    tokenMining,
    handleApprove,
    isAllowance,
  };
};
