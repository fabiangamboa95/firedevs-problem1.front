import { EditProps, Edit, SimpleForm, TextInput } from "react-admin";
import { CUDToolbar } from "../utils/CUDrawer";
import { emailValidate, requiredValidate } from "../utils/validators";
import { useParams } from "react-router";

interface ProfesorParams {
  id?: string;
}

const EditProfessor: React.FC<EditProps> = (props) => {
  const { id } = useParams<ProfesorParams>();

  return (
    <Edit id={id} {...props} title=" ">
      <SimpleForm toolbar={<CUDToolbar />}>
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
