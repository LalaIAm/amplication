import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { ItemUpdateManyWithoutUsersInput } from "./ItemUpdateManyWithoutUsersInput";
import { ListUpdateManyWithoutUsersInput } from "./ListUpdateManyWithoutUsersInput";
import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  avatar?: string | null;
  bio?: string | null;
  event?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutUsersInput;
  lastName?: string | null;
  lists?: ListUpdateManyWithoutUsersInput;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
