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
import { HouseholdWhereUniqueInput } from "../../household/base/HouseholdWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PostUpdateManyWithoutForumsInput } from "./PostUpdateManyWithoutForumsInput";
@InputType()
class ForumUpdateInput {
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
  household?: HouseholdWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PostUpdateManyWithoutForumsInput,
  })
  @ValidateNested()
  @Type(() => PostUpdateManyWithoutForumsInput)
  @IsOptional()
  @Field(() => PostUpdateManyWithoutForumsInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutForumsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  topic?: string;
}
export { ForumUpdateInput };
