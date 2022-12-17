/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Web3Learn,
  Web3LearnInterface,
} from "../../../contracts/Web3LearnPub.sol/Web3Learn";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "Buy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SetSplit",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ratio",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "payee",
            type: "address",
          },
        ],
        internalType: "struct Web3Learn.Split[]",
        name: "splits",
        type: "tuple[]",
      },
    ],
    name: "_checkRatio",
    outputs: [
      {
        internalType: "bool",
        name: "isValid_",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "_getReward",
    outputs: [
      {
        internalType: "uint256",
        name: "canClaimAmount_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "_isWhitelistedToken",
    outputs: [
      {
        internalType: "bool",
        name: "isWhitelisted_",
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
        name: "token",
        type: "address",
      },
    ],
    name: "addWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ratio",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "payee",
            type: "address",
          },
        ],
        internalType: "struct Web3Learn.Split[]",
        name: "splits",
        type: "tuple[]",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
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
        name: "token",
        type: "address",
      },
    ],
    name: "removeWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160008190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506117a0806100696000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610111578063d647fc241461012f578063f80f5dd51461015f578063fe537ca21461017b57610088565b8063174e31c41461008d5780633187a287146100a95780634be98f94146100c557806378c8cda7146100f5575b600080fd5b6100a760048036038101906100a29190610e33565b6101ab565b005b6100c360048036038101906100be9190611021565b610273565b005b6100df60048036038101906100da9190611090565b610483565b6040516100ec91906110df565b60405180910390f35b61010f600480360381019061010a91906110fa565b61050a565b005b6101196105bf565b6040516101269190611148565b60405180910390f35b61014960048036038101906101449190611163565b6105e5565b60405161015691906111c7565b60405180910390f35b610179600480360381019061017491906110fa565b61063e565b005b610195600480360381019061019091906110fa565b6106f3565b6040516101a291906111c7565b60405180910390f35b6101b3610749565b6101bd3383610483565b8111156101c957600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102559190611211565b92505081905550610267823383610798565b61026f61081e565b5050565b61027b610749565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166102d157600080fd5b6102da816105e5565b6102e357600080fd5b600030905060008373ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016103239190611254565b602060405180830381865afa158015610340573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103649190611284565b905061037284338488610828565b60008473ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016103ad9190611254565b602060405180830381865afa1580156103ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ee9190611284565b9050600082826103fe9190611211565b905061040b8682876108b1565b868673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f251183b9c2b842c80f376686f0f21acd10da77772f5eef8eb0de739a35220c30600160405161046a91906111c7565b60405180910390a45050505061047e61081e565b505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461056457600080fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080825190506000805b8281101561062f5784818151811061060b5761060a6112b1565b5b6020026020010151600001518261062291906112e0565b91508060010190506105f0565b50612710811492505050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461069857600080fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60026000540361078e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078590611371565b60405180910390fd5b6002600081905550565b6108198363a9059cbb60e01b84846040516024016107b7929190611391565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b505050565b6001600081905550565b6108ab846323b872dd60e01b858585604051602401610849939291906113ba565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b50505050565b6000815190506000805b82811015610a425760006127108583815181106108db576108da6112b1565b5b602002602001015160000151876108f291906113f1565b6108fc9190611462565b90508060036000878581518110610916576109156112b1565b5b60200260200101516020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109a891906112e0565b9250508190555080836109bb91906112e0565b9250816001019150808773ffffffffffffffffffffffffffffffffffffffff168684815181106109ee576109ed6112b1565b5b60200260200101516020015173ffffffffffffffffffffffffffffffffffffffff167fc63b194ef2132e5904173b81b08d724b4a89cbea7cccc6faf99f5e2c33f2a68360405160405180910390a4506108bb565b5060008185610a519190611211565b905060008114610aef5780600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ae791906112e0565b925050819055505b505050505050565b6000610b59826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610bbe9092919063ffffffff16565b9050600081511115610bb95780806020019051810190610b7991906114bf565b610bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baf9061155e565b60405180910390fd5b5b505050565b6060610bcd8484600085610bd6565b90509392505050565b606082471015610c1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c12906115f0565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c449190611681565b60006040518083038185875af1925050503d8060008114610c81576040519150601f19603f3d011682016040523d82523d6000602084013e610c86565b606091505b5091509150610c9787838387610ca3565b92505050949350505050565b60608315610d05576000835103610cfd57610cbd85610d18565b610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf3906116e4565b60405180910390fd5b5b829050610d10565b610d0f8383610d3b565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115610d4e5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d829190611748565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610dca82610d9f565b9050919050565b610dda81610dbf565b8114610de557600080fd5b50565b600081359050610df781610dd1565b92915050565b6000819050919050565b610e1081610dfd565b8114610e1b57600080fd5b50565b600081359050610e2d81610e07565b92915050565b60008060408385031215610e4a57610e49610d95565b5b6000610e5885828601610de8565b9250506020610e6985828601610e1e565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610ec182610e78565b810181811067ffffffffffffffff82111715610ee057610edf610e89565b5b80604052505050565b6000610ef3610d8b565b9050610eff8282610eb8565b919050565b600067ffffffffffffffff821115610f1f57610f1e610e89565b5b602082029050602081019050919050565b600080fd5b600080fd5b600060408284031215610f5057610f4f610f35565b5b610f5a6040610ee9565b90506000610f6a84828501610e1e565b6000830152506020610f7e84828501610de8565b60208301525092915050565b6000610f9d610f9884610f04565b610ee9565b90508083825260208201905060408402830185811115610fc057610fbf610f30565b5b835b81811015610fe95780610fd58882610f3a565b845260208401935050604081019050610fc2565b5050509392505050565b600082601f83011261100857611007610e73565b5b8135611018848260208601610f8a565b91505092915050565b60008060006060848603121561103a57611039610d95565b5b600061104886828701610e1e565b935050602061105986828701610de8565b925050604084013567ffffffffffffffff81111561107a57611079610d9a565b5b61108686828701610ff3565b9150509250925092565b600080604083850312156110a7576110a6610d95565b5b60006110b585828601610de8565b92505060206110c685828601610de8565b9150509250929050565b6110d981610dfd565b82525050565b60006020820190506110f460008301846110d0565b92915050565b6000602082840312156111105761110f610d95565b5b600061111e84828501610de8565b91505092915050565b600061113282610d9f565b9050919050565b61114281611127565b82525050565b600060208201905061115d6000830184611139565b92915050565b60006020828403121561117957611178610d95565b5b600082013567ffffffffffffffff81111561119757611196610d9a565b5b6111a384828501610ff3565b91505092915050565b60008115159050919050565b6111c1816111ac565b82525050565b60006020820190506111dc60008301846111b8565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061121c82610dfd565b915061122783610dfd565b925082820390508181111561123f5761123e6111e2565b5b92915050565b61124e81610dbf565b82525050565b60006020820190506112696000830184611245565b92915050565b60008151905061127e81610e07565b92915050565b60006020828403121561129a57611299610d95565b5b60006112a88482850161126f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006112eb82610dfd565b91506112f683610dfd565b925082820190508082111561130e5761130d6111e2565b5b92915050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b600061135b601f83611314565b915061136682611325565b602082019050919050565b6000602082019050818103600083015261138a8161134e565b9050919050565b60006040820190506113a66000830185611245565b6113b360208301846110d0565b9392505050565b60006060820190506113cf6000830186611245565b6113dc6020830185611245565b6113e960408301846110d0565b949350505050565b60006113fc82610dfd565b915061140783610dfd565b925082820261141581610dfd565b9150828204841483151761142c5761142b6111e2565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061146d82610dfd565b915061147883610dfd565b92508261148857611487611433565b5b828204905092915050565b61149c816111ac565b81146114a757600080fd5b50565b6000815190506114b981611493565b92915050565b6000602082840312156114d5576114d4610d95565b5b60006114e3848285016114aa565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611548602a83611314565b9150611553826114ec565b604082019050919050565b600060208201905081810360008301526115778161153b565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006115da602683611314565b91506115e58261157e565b604082019050919050565b60006020820190508181036000830152611609816115cd565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611644578082015181840152602081019050611629565b60008484015250505050565b600061165b82611610565b611665818561161b565b9350611675818560208601611626565b80840191505092915050565b600061168d8284611650565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006116ce601d83611314565b91506116d982611698565b602082019050919050565b600060208201905081810360008301526116fd816116c1565b9050919050565b600081519050919050565b600061171a82611704565b6117248185611314565b9350611734818560208601611626565b61173d81610e78565b840191505092915050565b60006020820190508181036000830152611762818461170f565b90509291505056fea26469706673582212209f475e98d984565cd61f433058cbe45ae8500a8225438336a558bb21c271578d64736f6c63430008110033";

type Web3LearnConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Web3LearnConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Web3Learn__factory extends ContractFactory {
  constructor(...args: Web3LearnConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Web3Learn> {
    return super.deploy(overrides || {}) as Promise<Web3Learn>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Web3Learn {
    return super.attach(address) as Web3Learn;
  }
  override connect(signer: Signer): Web3Learn__factory {
    return super.connect(signer) as Web3Learn__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Web3LearnInterface {
    return new utils.Interface(_abi) as Web3LearnInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Web3Learn {
    return new Contract(address, _abi, signerOrProvider) as Web3Learn;
  }
}
