/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Web3LearnNFT,
  Web3LearnNFTInterface,
} from "../../../contracts/SBT2.sol/Web3LearnNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct ERC721.NFT",
        name: "id",
        type: "tuple",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "_getNFT",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
        ],
        internalType: "struct ERC721.NFT[]",
        name: "nfts_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNFT",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
        ],
        internalType: "struct ERC721.NFT[]",
        name: "nfts",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b4e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c57806399f110101161006657806399f1101014610234578063a22cb46514610264578063b88d4fde14610280578063e985e9c51461029c576100cf565b80636352211e146101b857806370a08231146101e85780639907119014610218576100cf565b806301ffc9a7146100d4578063081812fc14610104578063095ea7b314610134578063161a6c1e1461015057806323b872dd1461018057806342842e0e1461019c575b600080fd5b6100ee60048036038101906100e99190610d1a565b6102cc565b6040516100fb9190610d62565b60405180910390f35b61011e60048036038101906101199190610db3565b61039e565b60405161012b9190610e21565b60405180910390f35b61014e60048036038101906101499190610e68565b6103a5565b005b61016a60048036038101906101659190610ea8565b6103a9565b604051610177919061106b565b60405180910390f35b61019a6004803603810190610195919061108d565b6103bb565b005b6101b660048036038101906101b1919061108d565b61042f565b005b6101d260048036038101906101cd9190610db3565b610567565b6040516101df9190610e21565b60405180910390f35b61020260048036038101906101fd9190610ea8565b61056e565b60405161020f91906110ef565b60405180910390f35b610232600480360381019061022d919061123f565b610625565b005b61024e60048036038101906102499190610ea8565b610635565b60405161025b919061106b565b60405180910390f35b61027e600480360381019061027991906112f6565b6107f6565b005b61029a60048036038101906102959190611396565b6108f3565b005b6102b660048036038101906102b1919061141e565b610aa0565b6040516102c39190610d62565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061039757507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000919050565b5050565b60606103b482610635565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461042a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610421906114bb565b60405180910390fd5b505050565b61043a8383836103bb565b60008273ffffffffffffffffffffffffffffffffffffffff163b1480610523575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a023386856040518463ffffffff1660e01b81526004016104bf93929190611512565b6020604051808303816000875af11580156104de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105029190611571565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610562576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610559906115ea565b60405180910390fd5b505050565b6000919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611656565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610630838383610acf565b505050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156107eb57838290600052602060002090600202016040518060400160405290816000820180546106c8906116a5565b80601f01602080910402602001604051908101604052809291908181526020018280546106f4906116a5565b80156107415780601f1061071657610100808354040283529160200191610741565b820191906000526020600020905b81548152906001019060200180831161072457829003601f168201915b5050505050815260200160018201805461075a906116a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610786906116a5565b80156107d35780601f106107a8576101008083540402835291602001916107d3565b820191906000526020600020905b8154815290600101906020018083116107b657829003601f168201915b50505050508152505081526020019060010190610695565b505050509050919050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516108e79190610d62565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610962576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610959906114bb565b60405180910390fd5b61096d8585856103bb565b60008473ffffffffffffffffffffffffffffffffffffffff163b1480610a5a575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663150b7a0233888787876040518663ffffffff1660e01b81526004016109f6959493929190611703565b6020604051808303816000875af1158015610a15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a399190611571565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610a99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a90906115ea565b60405180910390fd5b5050505050565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b359061179d565b60405180910390fd5b60006040518060400160405280848152602001838152509050600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610ba7906117ec565b91905055506000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000019081610c2991906119e0565b506020820151816001019081610c3f91906119e0565b5050508373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f9bf9f890f1b3bbd43af3baaf6d54ded24f445f2f19a1f7b173593576e72687ee83604051610ca09190611af6565b60405180910390a350505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610cf781610cc2565b8114610d0257600080fd5b50565b600081359050610d1481610cee565b92915050565b600060208284031215610d3057610d2f610cb8565b5b6000610d3e84828501610d05565b91505092915050565b60008115159050919050565b610d5c81610d47565b82525050565b6000602082019050610d776000830184610d53565b92915050565b6000819050919050565b610d9081610d7d565b8114610d9b57600080fd5b50565b600081359050610dad81610d87565b92915050565b600060208284031215610dc957610dc8610cb8565b5b6000610dd784828501610d9e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e0b82610de0565b9050919050565b610e1b81610e00565b82525050565b6000602082019050610e366000830184610e12565b92915050565b610e4581610e00565b8114610e5057600080fd5b50565b600081359050610e6281610e3c565b92915050565b60008060408385031215610e7f57610e7e610cb8565b5b6000610e8d85828601610e53565b9250506020610e9e85828601610d9e565b9150509250929050565b600060208284031215610ebe57610ebd610cb8565b5b6000610ecc84828501610e53565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f3b578082015181840152602081019050610f20565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f6382610f01565b610f6d8185610f0c565b9350610f7d818560208601610f1d565b610f8681610f47565b840191505092915050565b60006040830160008301518482036000860152610fae8282610f58565b91505060208301518482036020860152610fc88282610f58565b9150508091505092915050565b6000610fe18383610f91565b905092915050565b6000602082019050919050565b600061100182610ed5565b61100b8185610ee0565b93508360208202850161101d85610ef1565b8060005b85811015611059578484038952815161103a8582610fd5565b945061104583610fe9565b925060208a01995050600181019050611021565b50829750879550505050505092915050565b600060208201905081810360008301526110858184610ff6565b905092915050565b6000806000606084860312156110a6576110a5610cb8565b5b60006110b486828701610e53565b93505060206110c586828701610e53565b92505060406110d686828701610d9e565b9150509250925092565b6110e981610d7d565b82525050565b600060208201905061110460008301846110e0565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61114c82610f47565b810181811067ffffffffffffffff8211171561116b5761116a611114565b5b80604052505050565b600061117e610cae565b905061118a8282611143565b919050565b600067ffffffffffffffff8211156111aa576111a9611114565b5b6111b382610f47565b9050602081019050919050565b82818337600083830152505050565b60006111e26111dd8461118f565b611174565b9050828152602081018484840111156111fe576111fd61110f565b5b6112098482856111c0565b509392505050565b600082601f8301126112265761122561110a565b5b81356112368482602086016111cf565b91505092915050565b60008060006060848603121561125857611257610cb8565b5b600061126686828701610e53565b935050602084013567ffffffffffffffff81111561128757611286610cbd565b5b61129386828701611211565b925050604084013567ffffffffffffffff8111156112b4576112b3610cbd565b5b6112c086828701611211565b9150509250925092565b6112d381610d47565b81146112de57600080fd5b50565b6000813590506112f0816112ca565b92915050565b6000806040838503121561130d5761130c610cb8565b5b600061131b85828601610e53565b925050602061132c858286016112e1565b9150509250929050565b600080fd5b600080fd5b60008083601f8401126113565761135561110a565b5b8235905067ffffffffffffffff81111561137357611372611336565b5b60208301915083600182028301111561138f5761138e61133b565b5b9250929050565b6000806000806000608086880312156113b2576113b1610cb8565b5b60006113c088828901610e53565b95505060206113d188828901610e53565b94505060406113e288828901610d9e565b935050606086013567ffffffffffffffff81111561140357611402610cbd565b5b61140f88828901611340565b92509250509295509295909350565b6000806040838503121561143557611434610cb8565b5b600061144385828601610e53565b925050602061145485828601610e53565b9150509250929050565b600082825260208201905092915050565b7f5342540000000000000000000000000000000000000000000000000000000000600082015250565b60006114a560038361145e565b91506114b08261146f565b602082019050919050565b600060208201905081810360008301526114d481611498565b9050919050565b600082825260208201905092915050565b50565b60006114fc6000836114db565b9150611507826114ec565b600082019050919050565b60006080820190506115276000830186610e12565b6115346020830185610e12565b61154160408301846110e0565b8181036060830152611552816114ef565b9050949350505050565b60008151905061156b81610cee565b92915050565b60006020828403121561158757611586610cb8565b5b60006115958482850161155c565b91505092915050565b7f756e7361666520726563697069656e7400000000000000000000000000000000600082015250565b60006115d460108361145e565b91506115df8261159e565b602082019050919050565b60006020820190508181036000830152611603816115c7565b9050919050565b7f6f776e6572203d207a65726f2061646472657373000000000000000000000000600082015250565b600061164060148361145e565b915061164b8261160a565b602082019050919050565b6000602082019050818103600083015261166f81611633565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806116bd57607f821691505b6020821081036116d0576116cf611676565b5b50919050565b60006116e283856114db565b93506116ef8385846111c0565b6116f883610f47565b840190509392505050565b60006080820190506117186000830188610e12565b6117256020830187610e12565b61173260408301866110e0565b81810360608301526117458184866116d6565b90509695505050505050565b7f6d696e7420746f207a65726f2061646472657373000000000000000000000000600082015250565b600061178760148361145e565b915061179282611751565b602082019050919050565b600060208201905081810360008301526117b68161177a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117f782610d7d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611829576118286117bd565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026118967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611859565b6118a08683611859565b95508019841693508086168417925050509392505050565b6000819050919050565b60006118dd6118d86118d384610d7d565b6118b8565b610d7d565b9050919050565b6000819050919050565b6118f7836118c2565b61190b611903826118e4565b848454611866565b825550505050565b600090565b611920611913565b61192b8184846118ee565b505050565b5b8181101561194f57611944600082611918565b600181019050611931565b5050565b601f8211156119945761196581611834565b61196e84611849565b8101602085101561197d578190505b61199161198985611849565b830182611930565b50505b505050565b600082821c905092915050565b60006119b760001984600802611999565b1980831691505092915050565b60006119d083836119a6565b9150826002028217905092915050565b6119e982610f01565b67ffffffffffffffff811115611a0257611a01611114565b5b611a0c82546116a5565b611a17828285611953565b600060209050601f831160018114611a4a5760008415611a38578287015190505b611a4285826119c4565b865550611aaa565b601f198416611a5886611834565b60005b82811015611a8057848901518255600182019150602085019450602081019050611a5b565b86831015611a9d5784890151611a99601f8916826119a6565b8355505b6001600288020188555050505b505050505050565b60006040830160008301518482036000860152611acf8282610f58565b91505060208301518482036020860152611ae98282610f58565b9150508091505092915050565b60006020820190508181036000830152611b108184611ab2565b90509291505056fea26469706673582212205b5ad75dc1e2f8cfa226d1e382f4e246658d2d1b94c5c61316a5e2194747e34364736f6c63430008110033";

type Web3LearnNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Web3LearnNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Web3LearnNFT__factory extends ContractFactory {
  constructor(...args: Web3LearnNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Web3LearnNFT> {
    return super.deploy(overrides || {}) as Promise<Web3LearnNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Web3LearnNFT {
    return super.attach(address) as Web3LearnNFT;
  }
  override connect(signer: Signer): Web3LearnNFT__factory {
    return super.connect(signer) as Web3LearnNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Web3LearnNFTInterface {
    return new utils.Interface(_abi) as Web3LearnNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Web3LearnNFT {
    return new Contract(address, _abi, signerOrProvider) as Web3LearnNFT;
  }
}
