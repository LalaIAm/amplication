import { User } from "../user/User";

export type Note = {
  createdAt: Date;
  household: boolean | null;
  id: string;
  owner?: User | null;
  text: string | null;
  updatedAt: Date;
};
