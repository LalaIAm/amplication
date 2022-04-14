import { UserCreateNestedManyWithoutItemsInput } from "./UserCreateNestedManyWithoutItemsInput";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type ItemCreateInput = {
  assignedTo?: UserCreateNestedManyWithoutItemsInput;
  completed?: boolean | null;
  details?: string | null;
  due?: Date | null;
  list?: ListWhereUniqueInput | null;
  title?: string | null;
};
