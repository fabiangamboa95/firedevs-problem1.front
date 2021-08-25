import { EditProps, Edit, SimpleForm, TextInput } from "react-admin";
import { emailValidate, requiredValidate } from "../utils/validators";

const EditProfessor: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props} title="Editar Profesor">
      <SimpleForm>
        <TextInput
          source="nombre"
          label="Nombre"
          autoFocus
          validate={requiredValidate}
        />
        <TextInput source="email" label="Email" validate={emailValidate} />
      </SimpleForm>
    </Edit>
  );
};

export default EditProfessor;
