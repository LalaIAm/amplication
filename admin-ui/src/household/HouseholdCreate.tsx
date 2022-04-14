import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { HouseholdCalendarTitle } from "../householdCalendar/HouseholdCalendarTitle";
import { UserTitle } from "../user/UserTitle";

export const HouseholdCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="householdCalendars"
          reference="HouseholdCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HouseholdCalendarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="members"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
