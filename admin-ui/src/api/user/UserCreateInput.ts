import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { ItemCreateNestedManyWithoutUsersInput } from "./ItemCreateNestedManyWithoutUsersInput";
import { ListCreateNestedManyWithoutUsersInput } from "./ListCreateNestedManyWithoutUsersInput";
import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  event?: EventCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  lists?: ListCreateNestedManyWithoutUsersInput;
  notes?: NoteCreateNestedManyWithoutUsersInput;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
