import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const NoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Household" source="household" />
        <ReferenceInput source="user.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
