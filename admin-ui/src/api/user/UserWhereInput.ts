import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { ListListRelationFilter } from "../list/ListListRelationFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  event?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  lastName?: StringNullableFilter;
  lists?: ListListRelationFilter;
  notes?: NoteListRelationFilter;
  posts?: PostListRelationFilter;
  username?: StringFilter;
};
