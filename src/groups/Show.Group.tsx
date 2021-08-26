import { Card, CardContent, Link, Typography } from "@material-ui/core";
import {
  Datagrid,
  ReferenceManyField,
  TextField,
  EditButton,
  useShowController,
  ReferenceField,
  Button,
  NumberField,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const ShowGroup = (props: any) => {
  const classes = useStyles();
  const { record } = useShowController(props);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" style={{ marginLeft: 10 }} gutterBottom>
          Estudiantes del grupo
        </Typography>
        <div className={classes.spacer}>&nbsp;</div>
        <ReferenceManyField
          reference="students"
          target="groupId"
          label="Estudiantes del Grupo"
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
        <div className={classes.spacer}>&nbsp;</div>
        <div style={{ float: "right", marginBottom: 10 }}>
          <Button
            component={Link}
            href="#/students"
            label="Agregar Estudiantes"
            onClick={(e) => e.stopPropagation()}
          >
            <PersonAddIcon />
          </Button>
          <EditButton
            basePath="/groups"
            label="Actualizar Grupo"
            record={record}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  root: { width: 600, margin: "auto" },
  spacer: { height: 20 },
  invoices: { margin: "10px 0" },
});

export default ShowGroup;
