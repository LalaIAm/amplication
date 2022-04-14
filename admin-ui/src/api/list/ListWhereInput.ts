import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListWhereInput = {
  id?: StringFilter;
  isHousehold?: BooleanNullableFilter;
  items?: ItemListRelationFilter;
  owner?: UserWhereUniqueInput;
  title?: StringFilter;
};
