import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HouseholdCalendarServiceBase } from "./base/householdCalendar.service.base";

@Injectable()
export class HouseholdCalendarService extends HouseholdCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
