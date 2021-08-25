import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { requiredValidate } from "../utils/validators";

const CreateCity: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title="Agregar Ciudad">
      <SimpleForm redirect="/cities">
        <TextInput source="nombre" validate={requiredValidate} />
      </SimpleForm>
    </Create>
  );
};

export default CreateCity;
