import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  event?: EventCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
