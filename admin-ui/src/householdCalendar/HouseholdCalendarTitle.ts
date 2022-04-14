import { HouseholdCalendar as THouseholdCalendar } from "../api/householdCalendar/HouseholdCalendar";

export const HOUSEHOLDCALENDAR_TITLE_FIELD = "id";

export const HouseholdCalendarTitle = (record: THouseholdCalendar): string => {
  return record.id || record.id;
};
