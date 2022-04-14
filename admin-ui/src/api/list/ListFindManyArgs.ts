import { ListWhereInput } from "./ListWhereInput";
import { ListOrderByInput } from "./ListOrderByInput";

export type ListFindManyArgs = {
  where?: ListWhereInput;
  orderBy?: Array<ListOrderByInput>;
  skip?: number;
  take?: number;
};
