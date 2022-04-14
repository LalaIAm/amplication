import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  author?: UserWhereUniqueInput;
  forum?: ForumWhereUniqueInput;
  id?: StringFilter;
  text?: StringFilter;
};
