import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { Route, Switch } from "react-router";
import QuickFormDrawer, { QFDListActions } from "../utils/QuickFormDrawer";
import CreateStudent from "./Create.Student";
import EditStudent from "./Edit.Student";

const ListStudents: React.FC<ListProps> = (props) => (
  <>
    <List
      {...props}
      perPage={10}
      title="Listado de Estudiantes"
      actions={<QFDListActions />}
    >
      <Datagrid rowClick="edit">
        <TextField source="nombre" />
        <ReferenceField source="groupId" reference="groups" label="Grupo">
          <TextField source="nombre" />
        </ReferenceField>
        <TextField source="email" />
        <NumberField source="edad" />
        <TextField source="sexo" />
        <DateField source="fechaNacimiento" />
        <ReferenceField source="ciudadNacimiento" reference="cities">
          <TextField source="nombre" />
        </ReferenceField>
      </Datagrid>
    </List>
    <Switch>
      <Route path="/students/create" exact>
        <QuickFormDrawer {...props}>
          <CreateStudent {...props} />
        </QuickFormDrawer>
      </Route>
      <Route path="/students/:id">
        <QuickFormDrawer {...props}>
          <EditStudent {...props} />
        </QuickFormDrawer>
      </Route>
    </Switch>
  </>
);

export default ListStudents;
