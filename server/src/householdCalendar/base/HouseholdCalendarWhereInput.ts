/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventListRelationFilter } from "../../event/base/EventListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { HouseholdWhereUniqueInput } from "../../household/base/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class HouseholdCalendarWhereInput {
  @ApiProperty({
    required: false,
    type: () => EventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventListRelationFilter)
  @IsOptional()
  @Field(() => EventListRelationFilter, {
    nullable: true,
  })
  events?: EventListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => HouseholdWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HouseholdWhereUniqueInput)
  @IsOptional()
  @Field(() => HouseholdWhereUniqueInput, {
    nullable: true,
  })
  household?: HouseholdWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}
export { HouseholdCalendarWhereInput };
