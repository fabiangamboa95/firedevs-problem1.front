import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { requiredValidate, emailValidate } from "../utils/validators";

const CreateProfessor: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title="Crear Profesor">
      <SimpleForm redirect="/professors">
        <TextInput
          source="nombre"
          label="Nombre"
          autoFocus
          validate={requiredValidate}
        />
        <TextInput source="email" label="Email" validate={emailValidate} />
      </SimpleForm>
    </Create>
  );
};

export default CreateProfessor;
