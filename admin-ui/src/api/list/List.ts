import { Item } from "../item/Item";
import { User } from "../user/User";

export type List = {
  createdAt: Date;
  id: string;
  isHousehold: boolean | null;
  items?: Array<Item>;
  owner?: User;
  title: string;
  updatedAt: Date;
};
