import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";
import { HouseholdCalendarWhereUniqueInput } from "../householdCalendar/HouseholdCalendarWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventCreateInput = {
  attending?: UserCreateNestedManyWithoutEventsInput;
  date: Date;
  description?: string | null;
  householdCalendar?: HouseholdCalendarWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  time?: Date | null;
  title: string;
};
