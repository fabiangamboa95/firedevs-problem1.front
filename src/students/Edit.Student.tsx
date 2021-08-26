import {
  Edit,
  EditProps,
  DateInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { QFDrawerToolbar } from "../utils/QuickFormDrawer";
import { emailRequiredValidate, requiredValidate } from "../utils/validators";
import { useParams } from "react-router";
import { Typography } from "@material-ui/core";

interface StudentParams {
  id?: string;
}

const EditStudent: React.FC<EditProps> = (props) => {
  const { id } = useParams<StudentParams>();

  return (
    <Edit id={id} {...props} title=" ">
      <SimpleForm toolbar={<QFDrawerToolbar />}>
        <Typography variant="h6">Actualizar Estudiante</Typography>
        <div style={{ height: 20 }}>&nbsp;</div>
        <TextInput source="nombre" autofocus validate={requiredValidate} />
        <TextInput source="email" validate={emailRequiredValidate} />
        <NumberInput source="edad" validate={requiredValidate} />
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
    </Edit>
  );
};

export default EditStudent;
