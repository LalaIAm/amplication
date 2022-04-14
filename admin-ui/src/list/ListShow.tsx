import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LIST_TITLE_FIELD } from "./ListTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ListShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isHousehold" source="isHousehold" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Item" target="ListId" label="Items">
          <Datagrid rowClick="show">
            <BooleanField label="completed" source="completed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <TextField label="Due" source="due" />
            <TextField label="ID" source="id" />
            <ReferenceField label="List" source="list.id" reference="List">
              <TextField source={LIST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
