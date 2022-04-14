import { ForumCreateNestedManyWithoutHouseholdsInput } from "./ForumCreateNestedManyWithoutHouseholdsInput";
import { HouseholdCalendarCreateNestedManyWithoutHouseholdsInput } from "./HouseholdCalendarCreateNestedManyWithoutHouseholdsInput";
import { UserCreateNestedManyWithoutHouseholdsInput } from "./UserCreateNestedManyWithoutHouseholdsInput";

export type HouseholdCreateInput = {
  forums?: ForumCreateNestedManyWithoutHouseholdsInput;
  householdCalendars?: HouseholdCalendarCreateNestedManyWithoutHouseholdsInput;
  members?: UserCreateNestedManyWithoutHouseholdsInput;
  name: string;
};
