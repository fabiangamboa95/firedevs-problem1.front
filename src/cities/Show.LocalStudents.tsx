import { Card, CardContent, Typography } from "@material-ui/core";
import {
  Datagrid,
  ReferenceManyField,
  TextField,
  useShowController,
  ReferenceField,
  NumberField,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const ShowLocalStudents = (props: any) => {
  const classes = useStyles();
  const { record } = useShowController(props);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" style={{ marginLeft: 10 }} gutterBottom>
          Estudiantes de {record && record.nombre}
        </Typography>
        <div className={classes.spacer}>&nbsp;</div>
        <ReferenceManyField
          reference="students"
          target="ciudadNacimiento"
          perPage={10}
          fullWidth
        >
          <Datagrid>
            <ReferenceField source="id" reference="students" label="Nombre">
              <TextField source="nombre" />
            </ReferenceField>
            <TextField source="email" />
            <NumberField source="edad" />
            <TextField source="sexo" />
          </Datagrid>
        </ReferenceManyField>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  root: { width: 600, margin: "auto" },
  spacer: { height: 20 },
  invoices: { margin: "10px 0" },
});

export default ShowLocalStudents;
