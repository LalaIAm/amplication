import { Forum } from "../forum/Forum";
import { HouseholdCalendar } from "../householdCalendar/HouseholdCalendar";
import { User } from "../user/User";

export type Household = {
  createdAt: Date;
  forums?: Array<Forum>;
  householdCalendars?: Array<HouseholdCalendar>;
  id: string;
  members?: Array<User>;
  name: string;
  updatedAt: Date;
};
