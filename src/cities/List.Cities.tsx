import { Datagrid, List, ListProps, TextField } from "react-admin";

const ListCities: React.FC<ListProps> = (props) => (
  <List {...props} perPage={10} title="Ciudades">
    <Datagrid>
      <TextField source="nombre" />
    </Datagrid>
  </List>
);

export default ListCities;
