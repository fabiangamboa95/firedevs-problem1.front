import { Datagrid, List, ListProps, TextField } from "react-admin";

const ListProfessors: React.FC<ListProps> = (props) => (
  <List {...props} perPage={10} title="Lista de Profesores">
    <Datagrid rowClick="edit">
      <TextField source="nombre" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default ListProfessors;
