import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { requiredValidate } from "../utils/validators";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";

const CreateCity: React.FC<CreateProps> = (props) => (
  <Create {...props} title=" ">
    <SimpleForm toolbar={<QFDrawerToolbar />}>
      <TextInput source="nombre" autoFocus validate={requiredValidate} />
    </SimpleForm>
  </Create>
);

export default CreateCity;
