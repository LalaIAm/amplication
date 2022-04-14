import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { HouseholdCalendarTitle } from "../householdCalendar/HouseholdCalendarTitle";
import { LocationTitle } from "../location/LocationTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attending"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <DateInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="householdcalendar.id"
          reference="HouseholdCalendar"
          label="Household Calendar"
        >
          <SelectInput optionText={HouseholdCalendarTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <DateTimeInput label="Time" source="time" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
