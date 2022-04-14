import { HouseholdCalendarWhereInput } from "./HouseholdCalendarWhereInput";
import { HouseholdCalendarOrderByInput } from "./HouseholdCalendarOrderByInput";

export type HouseholdCalendarFindManyArgs = {
  where?: HouseholdCalendarWhereInput;
  orderBy?: Array<HouseholdCalendarOrderByInput>;
  skip?: number;
  take?: number;
};
