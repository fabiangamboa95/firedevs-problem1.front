import { Datagrid, List, ListProps, TextField } from "react-admin";
import { Route } from "react-router";
import CUDrawer, { CUListActions } from "../utils/CUDrawer";
import CreateProfessor from "./Create.Professor";

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
    <Route path="/professors/create">
      <CUDrawer {...props}>
        <CreateProfessor {...props} />
      </CUDrawer>
    </Route>
  </>
);

export default ListProfessors;
