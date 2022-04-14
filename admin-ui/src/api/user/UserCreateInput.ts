import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
