import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";

export type PostCreateInput = {
  author?: UserWhereUniqueInput | null;
  forum?: ForumWhereUniqueInput | null;
  text: string;
};
