import { HouseholdCalendarCreateNestedManyWithoutHouseholdsInput } from "./HouseholdCalendarCreateNestedManyWithoutHouseholdsInput";
import { UserCreateNestedManyWithoutHouseholdsInput } from "./UserCreateNestedManyWithoutHouseholdsInput";

export type HouseholdCreateInput = {
  householdCalendars?: HouseholdCalendarCreateNestedManyWithoutHouseholdsInput;
  members?: UserCreateNestedManyWithoutHouseholdsInput;
  name: string;
};
