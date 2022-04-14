import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { PostCreateNestedManyWithoutForumsInput } from "./PostCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  household?: HouseholdWhereUniqueInput | null;
  posts?: PostCreateNestedManyWithoutForumsInput;
  topic: string;
};
