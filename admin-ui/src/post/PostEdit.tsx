import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { ForumTitle } from "../forum/ForumTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="forum.id" reference="Forum" label="Forum">
          <SelectInput optionText={ForumTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
