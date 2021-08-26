import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";
import { requiredValidate, emailValidate } from "../utils/validators";

const CreateProfessor: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title=" ">
      <SimpleForm redirect="/professors" toolbar={<QFDrawerToolbar />}>
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
