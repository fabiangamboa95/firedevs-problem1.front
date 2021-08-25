import {
  Datagrid,
  List,
  ListProps,
  ReferenceArrayField,
  SingleFieldList,
  TextField,
} from "react-admin";
import ShowLocalStudents from "./Show.LocalStudents";

const ListCities: React.FC<ListProps> = (props) => (
  <List {...props} perPage={10} title="Ciudades">
    <Datagrid rowClick="expand" expand={<ShowLocalStudents />}>
      <TextField source="nombre" label="Nombre de la ciudad" />
    </Datagrid>
  </List>
);

export default ListCities;
