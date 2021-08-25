import {
  Edit,
  EditProps,
  DateInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

const EditStudent: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props} title="Editar Estudiante">
      <SimpleForm>
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
    </Edit>
  );
};

export default EditStudent;
