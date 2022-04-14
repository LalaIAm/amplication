import { UserCreateNestedManyWithoutHouseholdsInput } from "./UserCreateNestedManyWithoutHouseholdsInput";

export type HouseholdCreateInput = {
  members?: UserCreateNestedManyWithoutHouseholdsInput;
  name: string;
};
