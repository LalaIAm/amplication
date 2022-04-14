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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FORUM_TITLE_FIELD } from "./ForumTitle";
import { HOUSEHOLD_TITLE_FIELD } from "../household/HouseholdTitle";

export const ForumShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Post" target="ForumId" label="Posts">
          <Datagrid rowClick="show">
            <ReferenceField label="Author" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Forum" source="forum.id" reference="Forum">
              <TextField source={FORUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
