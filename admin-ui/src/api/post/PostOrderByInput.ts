import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  forumId?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
