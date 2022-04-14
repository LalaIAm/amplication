import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";

export type PostUpdateInput = {
  author?: UserWhereUniqueInput | null;
  forum?: ForumWhereUniqueInput | null;
  text?: string;
};
