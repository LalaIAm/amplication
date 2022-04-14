import { User } from "../user/User";
import { HouseholdCalendar } from "../householdCalendar/HouseholdCalendar";
import { Location } from "../location/Location";

export type Event = {
  attending?: Array<User>;
  createdAt: Date;
  date: Date;
  description: string | null;
  householdCalendar?: HouseholdCalendar | null;
  id: string;
  location?: Location | null;
  time: Date | null;
  title: string;
  updatedAt: Date;
};
