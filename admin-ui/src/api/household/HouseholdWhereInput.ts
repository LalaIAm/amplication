import { ForumListRelationFilter } from "../forum/ForumListRelationFilter";
import { HouseholdCalendarListRelationFilter } from "../householdCalendar/HouseholdCalendarListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HouseholdWhereInput = {
  forums?: ForumListRelationFilter;
  householdCalendars?: HouseholdCalendarListRelationFilter;
  id?: StringFilter;
  members?: UserListRelationFilter;
  name?: StringFilter;
};
