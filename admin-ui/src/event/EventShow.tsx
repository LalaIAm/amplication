import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { HOUSEHOLDCALENDAR_TITLE_FIELD } from "../householdCalendar/HouseholdCalendarTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
