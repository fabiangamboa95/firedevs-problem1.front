import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { requiredValidate } from "../utils/validators";
import { CUDToolbar } from "../utils/CUDrawer";

const CreateCity: React.FC<CreateProps> = (props) => (
  <Create {...props} title=" ">
    <SimpleForm redirect="/cities" toolbar={<CUDToolbar />}>
      <TextInput source="nombre" autoFocus validate={requiredValidate} />
    </SimpleForm>
  </Create>
);

export default CreateCity;
