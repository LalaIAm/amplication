import { UserUpdateManyWithoutHouseholdsInput } from "./UserUpdateManyWithoutHouseholdsInput";

export type HouseholdUpdateInput = {
  members?: UserUpdateManyWithoutHouseholdsInput;
  name?: string;
};
