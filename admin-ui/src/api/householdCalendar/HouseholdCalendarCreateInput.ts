import { EventCreateNestedManyWithoutHouseholdCalendarsInput } from "./EventCreateNestedManyWithoutHouseholdCalendarsInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";

export type HouseholdCalendarCreateInput = {
  events?: EventCreateNestedManyWithoutHouseholdCalendarsInput;
  household?: HouseholdWhereUniqueInput | null;
};
