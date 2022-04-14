import { Event } from "../event/Event";
import { Household } from "../household/Household";
import { Item } from "../item/Item";
import { List } from "../list/List";
import { Note } from "../note/Note";
import { Post } from "../post/Post";

export type User = {
  avatar: string | null;
  bio: string | null;
  createdAt: Date;
  event?: Array<Event>;
  firstName: string | null;
  household?: Household | null;
  id: string;
  items?: Array<Item>;
  lastName: string | null;
  lists?: Array<List>;
  notes?: Array<Note>;
  posts?: Array<Post>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
