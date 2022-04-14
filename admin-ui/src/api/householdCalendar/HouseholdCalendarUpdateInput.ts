import { EventUpdateManyWithoutHouseholdCalendarsInput } from "./EventUpdateManyWithoutHouseholdCalendarsInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";

export type HouseholdCalendarUpdateInput = {
  events?: EventUpdateManyWithoutHouseholdCalendarsInput;
  household?: HouseholdWhereUniqueInput | null;
};
