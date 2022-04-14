import { Event } from "../event/Event";

export type Location = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string;
  updatedAt: Date;
};
