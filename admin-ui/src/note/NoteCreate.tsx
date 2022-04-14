import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Household" source="household" />
        <ReferenceInput source="user.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
