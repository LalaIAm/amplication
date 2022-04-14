import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { PostUpdateManyWithoutForumsInput } from "./PostUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  household?: HouseholdWhereUniqueInput | null;
  posts?: PostUpdateManyWithoutForumsInput;
  topic?: string;
};
