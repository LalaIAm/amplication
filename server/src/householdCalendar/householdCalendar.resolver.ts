import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HouseholdCalendarResolverBase } from "./base/householdCalendar.resolver.base";
import { HouseholdCalendar } from "./base/HouseholdCalendar";
import { HouseholdCalendarService } from "./householdCalendar.service";

@graphql.Resolver(() => HouseholdCalendar)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HouseholdCalendarResolver extends HouseholdCalendarResolverBase {
  constructor(
    protected readonly service: HouseholdCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
