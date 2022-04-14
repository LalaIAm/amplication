/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Household,
  Forum,
  HouseholdCalendar,
  User,
} from "@prisma/client";

export class HouseholdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HouseholdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HouseholdFindManyArgs>
  ): Promise<number> {
    return this.prisma.household.count(args);
  }

  async findMany<T extends Prisma.HouseholdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HouseholdFindManyArgs>
  ): Promise<Household[]> {
    return this.prisma.household.findMany(args);
  }
  async findOne<T extends Prisma.HouseholdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HouseholdFindUniqueArgs>
  ): Promise<Household | null> {
    return this.prisma.household.findUnique(args);
  }
  async create<T extends Prisma.HouseholdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HouseholdCreateArgs>
  ): Promise<Household> {
    return this.prisma.household.create<T>(args);
  }
  async update<T extends Prisma.HouseholdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HouseholdUpdateArgs>
  ): Promise<Household> {
    return this.prisma.household.update<T>(args);
  }
  async delete<T extends Prisma.HouseholdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HouseholdDeleteArgs>
  ): Promise<Household> {
    return this.prisma.household.delete(args);
  }

  async findForums(
    parentId: string,
    args: Prisma.ForumFindManyArgs
  ): Promise<Forum[]> {
    return this.prisma.household
      .findUnique({
        where: { id: parentId },
      })
      .forums(args);
  }

  async findHouseholdCalendars(
    parentId: string,
    args: Prisma.HouseholdCalendarFindManyArgs
  ): Promise<HouseholdCalendar[]> {
    return this.prisma.household
      .findUnique({
        where: { id: parentId },
      })
      .householdCalendars(args);
  }

  async findMembers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.household
      .findUnique({
        where: { id: parentId },
      })
      .members(args);
  }
}
