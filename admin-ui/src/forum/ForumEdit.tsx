import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { HouseholdTitle } from "../household/HouseholdTitle";
import { PostTitle } from "../post/PostTitle";

export const ForumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="household.id"
          reference="Household"
          label="Household"
        >
          <SelectInput optionText={HouseholdTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="posts"
          reference="Post"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostTitle} />
        </ReferenceArrayInput>
        <TextInput label="Topic" source="topic" />
      </SimpleForm>
    </Edit>
  );
};
