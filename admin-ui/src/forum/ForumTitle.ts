import { Forum as TForum } from "../api/forum/Forum";

export const FORUM_TITLE_FIELD = "topic";

export const ForumTitle = (record: TForum): string => {
  return record.topic || record.id;
};
