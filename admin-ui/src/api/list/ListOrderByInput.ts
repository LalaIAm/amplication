import { SortOrder } from "../../util/SortOrder";

export type ListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isHousehold?: SortOrder;
  ownerId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
