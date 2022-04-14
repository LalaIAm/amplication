import { UserUpdateManyWithoutEventsInput } from "./UserUpdateManyWithoutEventsInput";
import { HouseholdCalendarWhereUniqueInput } from "../householdCalendar/HouseholdCalendarWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventUpdateInput = {
  attending?: UserUpdateManyWithoutEventsInput;
  date?: Date;
  description?: string | null;
  householdCalendar?: HouseholdCalendarWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  time?: Date | null;
  title?: string;
};
