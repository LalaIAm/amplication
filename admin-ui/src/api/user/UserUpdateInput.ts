import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";

export type UserUpdateInput = {
  avatar?: string | null;
  bio?: string | null;
  event?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
