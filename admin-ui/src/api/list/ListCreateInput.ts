import { ItemCreateNestedManyWithoutListsInput } from "./ItemCreateNestedManyWithoutListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListCreateInput = {
  isHousehold?: boolean | null;
  items?: ItemCreateNestedManyWithoutListsInput;
  owner: UserWhereUniqueInput;
  title: string;
};
