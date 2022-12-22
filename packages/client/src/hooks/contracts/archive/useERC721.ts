import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';

import ERC721ABI from '@/libs/hardhat/artifacts/contracts/SBT_DEMO.sol/ERC721.json';
import type { ERC721 as ERC721Type } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = ERC721ABI.abi;

type Props = {
  id?: number;
  owner?: string;
  operator?: string;
  approved?: boolean;
  spender?: string;
};

type ReturnUseERC721Contract = {};

export const useERC721Contract = ({
  id,
  owner,
  operator,
  approved,
  spender,
}: Props): ReturnUseERC721Contract => {
  const ethereum = getEthereumSafety();
  const [mining, setMining] = useState<boolean>(false);
  const [ownerOf, setOwnerOf] = useState<string>('');
  const [balanceOf, setBalanceOf] = useState<number>(0);
  const [approvedAddress, setApprovedAddress] = useState<string>('');

  const ERC721Contract: ERC721Type | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    ) as ERC721Type;
  }, [ethereum]);

  const handleOwnerOf = useCallback(async () => {
    try {
      if (!ERC721Contract) return;
      if (!id) return;
      const ownerOf = await ERC721Contract.ownerOf(id);
      setOwnerOf(ownerOf);
    } catch (error) {
      console.error(error);
    }
  }, [ERC721Contract, id]);

  const handleBalanceOf = useCallback(async () => {
    try {
      if (!ERC721Contract) return;
      if (!owner) return;
      const balanceOf = ERC721Contract.balanceOf(owner);
      setBalanceOf((await balanceOf).toNumber());
    } catch (error) {
      console.error(error);
    }
  }, [ERC721Contract, owner]);

  const handleSetApprovalForAll = useCallback(async () => {
    try {
      if (!ERC721Contract) return;
      if (!operator || !approved) return;
      const setApprovalForAll = await ERC721Contract.setApprovalForAll(
        operator,
        approved
      );
      setMining(true);
      await setApprovalForAll.wait();
      setMining(false);
    } catch (error) {
      console.error(error);
    }
  }, [ERC721Contract, approved, operator]);

  const handleApprove = useCallback(async () => {
    try {
      if (!ERC721Contract) return;
      if (!spender || !id) return;
      const approve = await ERC721Contract.approve(spender, id);
      setMining(true);
      await approve.wait();
      setMining(false);
    } catch (error) {
      console.error(error);
    }
  }, [ERC721Contract, id, spender]);

  const handleGetApproved = useCallback(async () => {
    try {
      if (!ERC721Contract) return;
      if (!id) return;
      const getApproved = await ERC721Contract.getApproved(id);
      setApprovedAddress(getApproved);
    } catch (error) {
      console.error(error);
    }
  }, [ERC721Contract, id]);

  useEffect(() => {
    handleOwnerOf();
    handleBalanceOf();
    handleGetApproved();
  }, [handleBalanceOf, handleGetApproved, handleOwnerOf]);

  return {
    mining,
    ownerOf,
    balanceOf,
    handleSetApprovalForAll,
    handleApprove,
    approvedAddress,
  };
};
