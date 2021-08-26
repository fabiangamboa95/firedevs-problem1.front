import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";
import { requiredValidate, emailValidate } from "../utils/validators";
import { Typography } from "@material-ui/core";

const CreateProfessor: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title=" ">
      <SimpleForm redirect="/professors" toolbar={<QFDrawerToolbar />}>
        <Typography variant="h6">Agregar Profesor</Typography>
        <div style={{ height: 20 }}>&nbsp;</div>
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
