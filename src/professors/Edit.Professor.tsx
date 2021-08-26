import { EditProps, Edit, SimpleForm, TextInput } from "react-admin";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";
import { emailValidate, requiredValidate } from "../utils/validators";
import { useParams } from "react-router";
import { Typography } from "@material-ui/core";

interface ProfesorParams {
  id?: string;
}

const EditProfessor: React.FC<EditProps> = (props) => {
  const { id } = useParams<ProfesorParams>();

  return (
    <Edit id={id} {...props} title=" ">
      <SimpleForm toolbar={<QFDrawerToolbar />}>
        <Typography variant="h6">Editar Profesor</Typography>
        <div style={{ height: 20 }}>&nbsp;</div>
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
