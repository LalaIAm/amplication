import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { HouseholdCalendarWhereUniqueInput } from "../householdCalendar/HouseholdCalendarWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  attending?: UserListRelationFilter;
  date?: DateTimeFilter;
  householdCalendar?: HouseholdCalendarWhereUniqueInput;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  time?: DateTimeNullableFilter;
  title?: StringFilter;
};
