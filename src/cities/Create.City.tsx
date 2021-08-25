import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";

const CreateCity: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title="Agregar Ciudad">
      <SimpleForm redirect="/cities">
        <TextInput source="nombre" />
      </SimpleForm>
    </Create>
  );
};

export default CreateCity;
