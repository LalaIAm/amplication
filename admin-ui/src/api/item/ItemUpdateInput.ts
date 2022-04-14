import { UserUpdateManyWithoutItemsInput } from "./UserUpdateManyWithoutItemsInput";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type ItemUpdateInput = {
  assignedTo?: UserUpdateManyWithoutItemsInput;
  completed?: boolean | null;
  details?: string | null;
  due?: Date | null;
  list?: ListWhereUniqueInput | null;
  title?: string | null;
};
