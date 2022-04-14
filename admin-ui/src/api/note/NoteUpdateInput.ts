import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteUpdateInput = {
  household?: boolean | null;
  owner?: UserWhereUniqueInput | null;
  text?: string | null;
};
