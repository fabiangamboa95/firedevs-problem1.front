import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import ShowGroup from "./Show.Group";

const ListGroups: React.FC<ListProps> = (props) => (
  <List {...props} perPage={10} title="Grupos">
    <Datagrid rowClick="expand" expand={<ShowGroup />}>
      <TextField source="nombre" />
      <ReferenceField
        source="guiaId"
        reference="professors"
        label="Profesor Guia"
      >
        <TextField source="nombre" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default ListGroups;
