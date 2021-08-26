import { Datagrid, List, ListProps, TextField } from "react-admin";
import { Route, Switch } from "react-router";
import CUDrawer, { CUListActions } from "../utils/CUDrawer";
import CreateProfessor from "./Create.Professor";
import EditProfessor from "./Edit.Professor";

const ListProfessors: React.FC<ListProps> = (props) => (
  <>
    <List
      {...props}
      perPage={10}
      title="Lista de Profesores"
      actions={<CUListActions />}
    >
      <Datagrid rowClick="edit">
        <TextField source="nombre" />
        <TextField source="email" />
      </Datagrid>
    </List>
    <Switch>
      <Route path="/professors/create" exact>
        <CUDrawer {...props}>
          <CreateProfessor {...props} />
        </CUDrawer>
      </Route>
      <Route path="/professors/:id">
        <CUDrawer {...props}>
          <EditProfessor {...props} />
        </CUDrawer>
      </Route>
    </Switch>
  </>
);

export default ListProfessors;
