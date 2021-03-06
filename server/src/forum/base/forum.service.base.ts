/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Forum, Post, Household } from "@prisma/client";

export class ForumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ForumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ForumFindManyArgs>
  ): Promise<number> {
    return this.prisma.forum.count(args);
  }

  async findMany<T extends Prisma.ForumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ForumFindManyArgs>
  ): Promise<Forum[]> {
    return this.prisma.forum.findMany(args);
  }
  async findOne<T extends Prisma.ForumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ForumFindUniqueArgs>
  ): Promise<Forum | null> {
    return this.prisma.forum.findUnique(args);
  }
  async create<T extends Prisma.ForumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ForumCreateArgs>
  ): Promise<Forum> {
    return this.prisma.forum.create<T>(args);
  }
  async update<T extends Prisma.ForumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ForumUpdateArgs>
  ): Promise<Forum> {
    return this.prisma.forum.update<T>(args);
  }
  async delete<T extends Prisma.ForumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ForumDeleteArgs>
  ): Promise<Forum> {
    return this.prisma.forum.delete(args);
  }

  async findPosts(
    parentId: string,
    args: Prisma.PostFindManyArgs
  ): Promise<Post[]> {
    return this.prisma.forum
      .findUnique({
        where: { id: parentId },
      })
      .posts(args);
  }

  async getHousehold(parentId: string): Promise<Household | null> {
    return this.prisma.forum
      .findUnique({
        where: { id: parentId },
      })
      .household();
  }
}
