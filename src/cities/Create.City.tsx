import { Button, Toolbar } from "@material-ui/core";
import {
  Create,
  CreateProps,
  SaveButton,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useHistory } from "react-router";
import { requiredValidate } from "../utils/validators";
import { CUDToolbar } from "../utils/CUDrawer";

const CreateCityToolbar: React.FC = (props) => {
  const history = useHistory();

  return (
    <Toolbar {...props}>
      <SaveButton />
      <Button onClick={() => history.push("/cities")} style={{ marginLeft: 5 }}>
        Cancel
      </Button>
    </Toolbar>
  );
};

const CreateCity: React.FC<CreateProps> = (props) => {
  console.log(props);
  return (
    <Create {...props} title=" ">
      <SimpleForm redirect="/cities" toolbar={<CUDToolbar />}>
        <TextInput source="nombre" autoFocus validate={requiredValidate} />
      </SimpleForm>
    </Create>
  );
};

export default CreateCity;
