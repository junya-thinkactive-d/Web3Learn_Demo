import { Split } from "./contract"

export type Content = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  amount:number;
  token:string;
  splits:Split[]
};
