import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { CUDToolbar } from "../utils/CUDrawer";
import { requiredValidate, emailValidate } from "../utils/validators";

const CreateProfessor: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title=" ">
      <SimpleForm redirect="/professors" toolbar={<CUDToolbar />}>
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
