import { User } from "../user/User";
import { Forum } from "../forum/Forum";

export type Post = {
  author?: User | null;
  createdAt: Date;
  forum?: Forum | null;
  id: string;
  text: string;
  updatedAt: Date;
};
