import { Event } from "../event/Event";
import { Household } from "../household/Household";

export type HouseholdCalendar = {
  createdAt: Date;
  events?: Array<Event>;
  household?: Household | null;
  id: string;
  updatedAt: Date;
};
