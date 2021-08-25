import { Create, EditProps, Edit, SimpleForm, TextInput } from "react-admin";

const EditProfessor: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="nombre" label="Nombre" autoFocus />
        <TextInput source="email" label="Email" />
      </SimpleForm>
    </Edit>
  );
};

export default EditProfessor;
