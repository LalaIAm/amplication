import { Event } from "../event/Event";
import { Household } from "../household/Household";

export type User = {
  avatar: string | null;
  bio: string | null;
  createdAt: Date;
  event?: Array<Event>;
  firstName: string | null;
  household?: Household | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
