import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HouseholdWhereInput = {
  id?: StringFilter;
  members?: UserListRelationFilter;
  name?: StringFilter;
};
