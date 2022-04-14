import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HouseholdCalendarService } from "./householdCalendar.service";
import { HouseholdCalendarControllerBase } from "./base/householdCalendar.controller.base";

@swagger.ApiTags("householdCalendars")
@common.Controller("householdCalendars")
export class HouseholdCalendarController extends HouseholdCalendarControllerBase {
  constructor(
    protected readonly service: HouseholdCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
