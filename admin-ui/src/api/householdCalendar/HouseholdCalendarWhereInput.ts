import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type HouseholdCalendarWhereInput = {
  events?: EventListRelationFilter;
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
};
