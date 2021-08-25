import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";

const CreateProfessor: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/professors">
        <TextInput source="nombre" label="Nombre" autoFocus />
        <TextInput source="email" label="Email" />
      </SimpleForm>
    </Create>
  );
};

export default CreateProfessor;
