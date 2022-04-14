import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  createdAt?: SortOrder;
  household?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
