import { Household } from "../household/Household";

export type User = {
  avatar: string | null;
  bio: string | null;
  createdAt: Date;
  firstName: string | null;
  household?: Household | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
