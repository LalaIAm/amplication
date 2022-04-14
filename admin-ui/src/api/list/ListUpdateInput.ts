import { ItemUpdateManyWithoutListsInput } from "./ItemUpdateManyWithoutListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListUpdateInput = {
  isHousehold?: boolean | null;
  items?: ItemUpdateManyWithoutListsInput;
  owner?: UserWhereUniqueInput;
  title?: string;
};
