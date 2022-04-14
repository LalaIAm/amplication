import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NoteWhereInput = {
  household?: BooleanNullableFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  text?: StringNullableFilter;
};
