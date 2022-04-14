import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
