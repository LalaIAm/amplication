import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { FORUM_TITLE_FIELD } from "../forum/ForumTitle";
import { HOUSEHOLD_TITLE_FIELD } from "../household/HouseholdTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Avatar" source="avatar" />
        <TextField label="Bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <ReferenceField
          label="Household"
          source="household.id"
          reference="Household"
        >
          <TextField source={HOUSEHOLD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="List" target="UserId" label="Lists">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isHousehold" source="isHousehold" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Note" target="UserId" label="Notes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Household" source="household" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Owner" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Post" target="UserId" label="Posts">
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
