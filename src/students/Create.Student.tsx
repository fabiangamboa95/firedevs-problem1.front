import {
  Create,
  CreateProps,
  DateInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { emailRequiredValidate, requiredValidate } from "../utils/validators";

const CreateStudent: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title="Registrar Estudiante">
      <SimpleForm redirect="/students">
        <TextInput source="nombre" autofocus validate={requiredValidate} />
        <TextInput source="email" validate={emailRequiredValidate} />
        <NumberInput source="edad" validate={requiredValidate} />
        <SelectInput
          source="sexo"
          choices={[
            { id: 1, name: "Masculino" },
            { id: 2, name: "Femenino" },
          ]}
          optionValue="name"
          validate={requiredValidate}
        />
        <DateInput source="fechaNacimiento" validate={requiredValidate} />
        <ReferenceInput
          source="ciudadNacimiento"
          reference="cities"
          label="Ciudad de Nacimiento"
          validate={requiredValidate}
        >
          <SelectInput optionText="nombre" />
        </ReferenceInput>
        <ReferenceInput
          source="groupId"
          reference="groups"
          label="Grupo"
          allowEmpty
        >
          <SelectInput optionText="nombre" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateStudent;
