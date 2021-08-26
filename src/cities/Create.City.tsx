import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { requiredValidate } from "../utils/validators";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";
import { Typography } from "@material-ui/core";

const CreateCity: React.FC<CreateProps> = (props) => (
  <Create {...props} title=" ">
    <SimpleForm toolbar={<QFDrawerToolbar />}>
      <Typography variant="h6">Agregar Ciudad</Typography>
      <div style={{ height: 20 }}>&nbsp;</div>
      <TextInput source="nombre" autoFocus validate={requiredValidate} />
    </SimpleForm>
  </Create>
);

export default CreateCity;
