import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteCreateInput = {
  household?: boolean | null;
  owner?: UserWhereUniqueInput | null;
  text?: string | null;
};
