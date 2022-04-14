import { Module } from "@nestjs/common";
import { HouseholdCalendarModuleBase } from "./base/householdCalendar.module.base";
import { HouseholdCalendarService } from "./householdCalendar.service";
import { HouseholdCalendarController } from "./householdCalendar.controller";
import { HouseholdCalendarResolver } from "./householdCalendar.resolver";

@Module({
  imports: [HouseholdCalendarModuleBase],
  controllers: [HouseholdCalendarController],
  providers: [HouseholdCalendarService, HouseholdCalendarResolver],
  exports: [HouseholdCalendarService],
})
export class HouseholdCalendarModule {}
