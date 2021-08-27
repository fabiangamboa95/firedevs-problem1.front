import {
  Create,
  CreateProps,
  DateInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";
import {
  ageRequiredValidate,
  emailRequiredValidate,
  requiredValidate,
} from "../utils/validators";
import { Typography } from "@material-ui/core";

const CreateStudent: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} title=" ">
      <SimpleForm redirect="/students" toolbar={<QFDrawerToolbar />}>
        <Typography variant="h6">Agregar Estudiante</Typography>
        <div style={{ height: 20 }}>&nbsp;</div>
        <TextInput source="nombre" validate={requiredValidate} />
        <TextInput source="email" validate={emailRequiredValidate} />
        <NumberInput source="edad" validate={ageRequiredValidate} />
        <SelectInput
          source="sexo"
          choices={[
            { id: 1, name: "Masculino" },
            { id: 2, name: "Femenino" },
          ]}
          optionValue="name"
          validate={requiredValidate}
        />
        <DateInput source="fechaNacimiento" validate={requiredValidate} />
        <ReferenceInput
          source="ciudadNacimiento"
          reference="cities"
          label="Ciudad de Nacimiento"
          validate={requiredValidate}
        >
          <SelectInput optionText="nombre" />
        </ReferenceInput>
        <ReferenceInput
          source="groupId"
          reference="groups"
          label="Grupo"
          allowEmpty
        >
          <SelectInput optionText="nombre" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateStudent;
