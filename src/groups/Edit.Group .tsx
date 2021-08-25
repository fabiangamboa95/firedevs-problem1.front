import {
  Edit,
  EditProps,
  TabbedForm,
  FormTab,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

const EditGroup: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props} title="Editar Grupo">
      <TabbedForm>
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
    </Edit>
  );
};

export default EditGroup;
