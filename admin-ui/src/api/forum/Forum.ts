import { Household } from "../household/Household";
import { Post } from "../post/Post";

export type Forum = {
  createdAt: Date;
  household?: Household | null;
  id: string;
  posts?: Array<Post>;
  topic: string;
  updatedAt: Date;
};
