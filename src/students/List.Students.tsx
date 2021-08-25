import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

const ListStudents: React.FC<ListProps> = (props) => (
  <List {...props} perPage={10}>
    <Datagrid>
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
);

export default ListStudents;
