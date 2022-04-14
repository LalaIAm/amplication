import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ForumWhereInput = {
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  posts?: PostListRelationFilter;
  topic?: StringFilter;
};
