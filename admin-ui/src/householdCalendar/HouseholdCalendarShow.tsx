import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { HOUSEHOLDCALENDAR_TITLE_FIELD } from "./HouseholdCalendarTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { HOUSEHOLD_TITLE_FIELD } from "../household/HouseholdTitle";

export const HouseholdCalendarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Household"
          source="household.id"
          reference="Household"
        >
          <TextField source={HOUSEHOLD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Event"
          target="HouseholdCalendarId"
          label="Events"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Household Calendar"
              source="householdcalendar.id"
              reference="HouseholdCalendar"
            >
              <TextField source={HOUSEHOLDCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time" source="time" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
