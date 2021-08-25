import {
  SelectInput,
  Create,
  CreateProps,
  TextInput,
  ReferenceInput,
  TabbedForm,
  FormTab,
  SimpleFormIterator,
  ArrayInput,
  TextField,
} from "react-admin";

const CreateGroup: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title="Crear Grupo">
      <TabbedForm redirect="/groups">
        <FormTab label="Informacion">
          <TextInput source="nombre" label="Nombre" autoFocus />
          <ReferenceInput
            source="guiaId"
            reference="professors"
            label="Profesor Guia"
            allowEmpty
          >
            <SelectInput optionText="nombre" optionValue="id" />
          </ReferenceInput>
        </FormTab>
        <FormTab label="Profesores" path="professors">
          <ArrayInput source="profesores">
            <SimpleFormIterator>
              <ReferenceInput
                source="nombre"
                reference="professors"
                label="Profesor"
              >
                <SelectInput optionText="nombre" optionValue="id" />
              </ReferenceInput>
              <TextInput source="asignatura" label="Asignatura" />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

const SomeComponent = (props: any) => {
  console.log(props.choices);
  return <div>{props.choices[0].nombre}</div>;
};

export default CreateGroup;
