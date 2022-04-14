import { HouseholdCalendarUpdateManyWithoutHouseholdsInput } from "./HouseholdCalendarUpdateManyWithoutHouseholdsInput";
import { UserUpdateManyWithoutHouseholdsInput } from "./UserUpdateManyWithoutHouseholdsInput";

export type HouseholdUpdateInput = {
  householdCalendars?: HouseholdCalendarUpdateManyWithoutHouseholdsInput;
  members?: UserUpdateManyWithoutHouseholdsInput;
  name?: string;
};
