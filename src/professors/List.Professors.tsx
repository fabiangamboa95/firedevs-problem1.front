import { Datagrid, List, ListProps, TextField } from "react-admin";
import { Route, Switch } from "react-router";
import QuickFormDrawer, { QFDListActions } from "../utils/QuickFormDrawer";
import CreateProfessor from "./Create.Professor";
import EditProfessor from "./Edit.Professor";

const ListProfessors: React.FC<ListProps> = (props) => (
  <>
    <List
      {...props}
      perPage={10}
      title="Lista de Profesores"
      actions={<QFDListActions />}
    >
      <Datagrid rowClick="edit">
        <TextField source="nombre" />
        <TextField source="email" />
      </Datagrid>
    </List>
    <Switch>
      <Route path="/professors/create" exact>
        <QuickFormDrawer {...props}>
          <CreateProfessor {...props} />
        </QuickFormDrawer>
      </Route>
      <Route path="/professors/:id">
        <QuickFormDrawer {...props}>
          <EditProfessor {...props} />
        </QuickFormDrawer>
      </Route>
    </Switch>
  </>
);

export default ListProfessors;
