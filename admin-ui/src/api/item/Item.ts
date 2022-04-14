import { User } from "../user/User";
import { List } from "../list/List";

export type Item = {
  assignedTo?: Array<User>;
  completed: boolean | null;
  createdAt: Date;
  details: string | null;
  due: Date | null;
  id: string;
  list?: List | null;
  title: string | null;
  updatedAt: Date;
};
