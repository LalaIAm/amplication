import { User } from "../user/User";

export type Household = {
  createdAt: Date;
  id: string;
  members?: Array<User>;
  name: string;
  updatedAt: Date;
};
