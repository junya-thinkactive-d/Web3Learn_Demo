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
    name: "claimReard",
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
  "0x608060405234801561001057600080fd5b50600160008190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061188e806100696000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610111578063d647fc241461012f578063f80f5dd51461015f578063fe537ca21461017b57610088565b80633187a2871461008d5780634be98f94146100a957806378c8cda7146100d957806380355aa1146100f5575b600080fd5b6100a760048036038101906100a29190611063565b6101ab565b005b6100c360048036038101906100be91906110d2565b61043d565b6040516100d09190611121565b60405180910390f35b6100f360048036038101906100ee919061113c565b6104c4565b005b61010f600480360381019061010a9190611169565b610579565b005b610119610641565b60405161012691906111ca565b60405180910390f35b610149600480360381019061014491906111e5565b610667565b6040516101569190611249565b60405180910390f35b6101796004803603810190610174919061113c565b6106c0565b005b6101956004803603810190610190919061113c565b610775565b6040516101a29190611249565b60405180910390f35b6101b36107cb565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661020957600080fd5b7335d831f79e54f6b7abd3d324822de9084f00e27b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461028b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610282906112c1565b60405180910390fd5b61029481610667565b61029d57600080fd5b600030905060008373ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016102dd91906112f0565b602060405180830381865afa1580156102fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031e9190611320565b905061032c8433848861081a565b60008473ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b815260040161036791906112f0565b602060405180830381865afa158015610384573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a89190611320565b9050600082826103b8919061137c565b90506103c58682876108a3565b868673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f251183b9c2b842c80f376686f0f21acd10da77772f5eef8eb0de739a35220c3060016040516104249190611249565b60405180910390a450505050610438610ae9565b505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461051e57600080fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6105816107cb565b61058b338361043d565b81111561059757600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610623919061137c565b92505081905550610635823383610af3565b61063d610ae9565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080825190506000805b828110156106b15784818151811061068d5761068c6113b0565b5b602002602001015160000151826106a491906113df565b9150806001019050610672565b50612710811492505050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461071a57600080fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260005403610810576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108079061145f565b60405180910390fd5b6002600081905550565b61089d846323b872dd60e01b85858560405160240161083b9392919061147f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b79565b50505050565b6000815190506000805b82811015610a345760006127108583815181106108cd576108cc6113b0565b5b602002602001015160000151876108e491906114b6565b6108ee9190611527565b90508060036000878581518110610908576109076113b0565b5b60200260200101516020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461099a91906113df565b9250508190555080836109ad91906113df565b9250816001019150808773ffffffffffffffffffffffffffffffffffffffff168684815181106109e0576109df6113b0565b5b60200260200101516020015173ffffffffffffffffffffffffffffffffffffffff167fc63b194ef2132e5904173b81b08d724b4a89cbea7cccc6faf99f5e2c33f2a68360405160405180910390a4506108ad565b5060008185610a43919061137c565b905060008114610ae15780600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ad991906113df565b925050819055505b505050505050565b6001600081905550565b610b748363a9059cbb60e01b8484604051602401610b12929190611558565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b79565b505050565b6000610bdb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c409092919063ffffffff16565b9050600081511115610c3b5780806020019051810190610bfb91906115ad565b610c3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c319061164c565b60405180910390fd5b5b505050565b6060610c4f8484600085610c58565b90509392505050565b606082471015610c9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c94906116de565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610cc6919061176f565b60006040518083038185875af1925050503d8060008114610d03576040519150601f19603f3d011682016040523d82523d6000602084013e610d08565b606091505b5091509150610d1987838387610d25565b92505050949350505050565b60608315610d87576000835103610d7f57610d3f85610d9a565b610d7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d75906117d2565b60405180910390fd5b5b829050610d92565b610d918383610dbd565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115610dd05781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e049190611836565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610e3481610e21565b8114610e3f57600080fd5b50565b600081359050610e5181610e2b565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e8282610e57565b9050919050565b610e9281610e77565b8114610e9d57600080fd5b50565b600081359050610eaf81610e89565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f0382610eba565b810181811067ffffffffffffffff82111715610f2257610f21610ecb565b5b80604052505050565b6000610f35610e0d565b9050610f418282610efa565b919050565b600067ffffffffffffffff821115610f6157610f60610ecb565b5b602082029050602081019050919050565b600080fd5b600080fd5b600060408284031215610f9257610f91610f77565b5b610f9c6040610f2b565b90506000610fac84828501610e42565b6000830152506020610fc084828501610ea0565b60208301525092915050565b6000610fdf610fda84610f46565b610f2b565b9050808382526020820190506040840283018581111561100257611001610f72565b5b835b8181101561102b57806110178882610f7c565b845260208401935050604081019050611004565b5050509392505050565b600082601f83011261104a57611049610eb5565b5b813561105a848260208601610fcc565b91505092915050565b60008060006060848603121561107c5761107b610e17565b5b600061108a86828701610e42565b935050602061109b86828701610ea0565b925050604084013567ffffffffffffffff8111156110bc576110bb610e1c565b5b6110c886828701611035565b9150509250925092565b600080604083850312156110e9576110e8610e17565b5b60006110f785828601610ea0565b925050602061110885828601610ea0565b9150509250929050565b61111b81610e21565b82525050565b60006020820190506111366000830184611112565b92915050565b60006020828403121561115257611151610e17565b5b600061116084828501610ea0565b91505092915050565b600080604083850312156111805761117f610e17565b5b600061118e85828601610ea0565b925050602061119f85828601610e42565b9150509250929050565b60006111b482610e57565b9050919050565b6111c4816111a9565b82525050565b60006020820190506111df60008301846111bb565b92915050565b6000602082840312156111fb576111fa610e17565b5b600082013567ffffffffffffffff81111561121957611218610e1c565b5b61122584828501611035565b91505092915050565b60008115159050919050565b6112438161122e565b82525050565b600060208201905061125e600083018461123a565b92915050565b600082825260208201905092915050565b7f496e76616c696420546f6b656e00000000000000000000000000000000000000600082015250565b60006112ab600d83611264565b91506112b682611275565b602082019050919050565b600060208201905081810360008301526112da8161129e565b9050919050565b6112ea81610e77565b82525050565b600060208201905061130560008301846112e1565b92915050565b60008151905061131a81610e2b565b92915050565b60006020828403121561133657611335610e17565b5b60006113448482850161130b565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061138782610e21565b915061139283610e21565b92508282039050818111156113aa576113a961134d565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006113ea82610e21565b91506113f583610e21565b925082820190508082111561140d5761140c61134d565b5b92915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611449601f83611264565b915061145482611413565b602082019050919050565b600060208201905081810360008301526114788161143c565b9050919050565b600060608201905061149460008301866112e1565b6114a160208301856112e1565b6114ae6040830184611112565b949350505050565b60006114c182610e21565b91506114cc83610e21565b92508282026114da81610e21565b915082820484148315176114f1576114f061134d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061153282610e21565b915061153d83610e21565b92508261154d5761154c6114f8565b5b828204905092915050565b600060408201905061156d60008301856112e1565b61157a6020830184611112565b9392505050565b61158a8161122e565b811461159557600080fd5b50565b6000815190506115a781611581565b92915050565b6000602082840312156115c3576115c2610e17565b5b60006115d184828501611598565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611636602a83611264565b9150611641826115da565b604082019050919050565b6000602082019050818103600083015261166581611629565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006116c8602683611264565b91506116d38261166c565b604082019050919050565b600060208201905081810360008301526116f7816116bb565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611732578082015181840152602081019050611717565b60008484015250505050565b6000611749826116fe565b6117538185611709565b9350611763818560208601611714565b80840191505092915050565b600061177b828461173e565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006117bc601d83611264565b91506117c782611786565b602082019050919050565b600060208201905081810360008301526117eb816117af565b9050919050565b600081519050919050565b6000611808826117f2565b6118128185611264565b9350611822818560208601611714565b61182b81610eba565b840191505092915050565b6000602082019050818103600083015261185081846117fd565b90509291505056fea2646970667358221220553bca85b4dcb133cd44e386eaca4f8d179070335bff6f0666af92a01d04c88864736f6c63430008110033";

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
