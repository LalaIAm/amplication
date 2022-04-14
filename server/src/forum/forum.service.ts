import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ForumServiceBase } from "./base/forum.service.base";

@Injectable()
export class ForumService extends ForumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
