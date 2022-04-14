import { ForumUpdateManyWithoutHouseholdsInput } from "./ForumUpdateManyWithoutHouseholdsInput";
import { HouseholdCalendarUpdateManyWithoutHouseholdsInput } from "./HouseholdCalendarUpdateManyWithoutHouseholdsInput";
import { UserUpdateManyWithoutHouseholdsInput } from "./UserUpdateManyWithoutHouseholdsInput";

export type HouseholdUpdateInput = {
  forums?: ForumUpdateManyWithoutHouseholdsInput;
  householdCalendars?: HouseholdCalendarUpdateManyWithoutHouseholdsInput;
  members?: UserUpdateManyWithoutHouseholdsInput;
  name?: string;
};
