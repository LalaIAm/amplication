import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  event?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
