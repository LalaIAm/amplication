import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type ItemWhereInput = {
  assignedTo?: UserListRelationFilter;
  completed?: BooleanNullableFilter;
  details?: StringNullableFilter;
  due?: DateTimeNullableFilter;
  id?: StringFilter;
  list?: ListWhereUniqueInput;
  title?: StringNullableFilter;
};
