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

const CreateStudent: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title="Registrar Estudiante">
      <SimpleForm redirect="/students">
        <TextInput source="nombre" autofocus />
        <TextInput source="email" />
        <NumberInput source="edad" />
        <SelectInput
          source="sexo"
          choices={[
            { id: 1, name: "Masculino" },
            { id: 2, name: "Femenino" },
          ]}
          optionValue="name"
        />
        <DateInput source="fechaNacimiento" />
        <ReferenceInput
          source="ciudadNacimiento"
          reference="cities"
          label="Ciudad de Nacimiento"
        >
          <SelectInput optionText="nombre" />
        </ReferenceInput>
        <ReferenceInput source="groupId" reference="groups" label="Grupo">
          <SelectInput optionText="nombre" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateStudent;
