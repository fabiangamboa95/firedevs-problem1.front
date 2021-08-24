import { Datagrid, List, ListProps, TextField } from "react-admin";

const ListStudents: React.FC<ListProps> = (props) => (
  <List {...props} perPage={10}>
    <Datagrid>
      <TextField source="nombre" />
    </Datagrid>
  </List>
);

export default ListStudents;
