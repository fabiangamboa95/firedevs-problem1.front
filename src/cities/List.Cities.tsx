import React from "react";
import {
  Datagrid,
  List,
  ListProps,
  TextField,
  CardActions,
  CreateButton,
} from "react-admin";
import { Drawer } from "@material-ui/core";
import { Route, useHistory } from "react-router";
import CreateCity from "./Create.City";
import ShowLocalStudents from "./Show.LocalStudents";
import CUDrawer from "../utils/CUDrawer";

const ListCitiesActions = ({ basePath }: { basePath?: string }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

const ListCities: React.FC<ListProps> = (props) => {
  const history = useHistory();
  console.log(props);

  return (
    <>
      <List
        {...props}
        perPage={10}
        title="Ciudades"
        actions={<ListCitiesActions />}
      >
        <Datagrid rowClick="expand" expand={<ShowLocalStudents />}>
          <TextField source="nombre" label="Nombre de la ciudad" />
        </Datagrid>
      </List>
      <Route
        path="/cities/create"
        render={() => (
          <CUDrawer {...props}>
            <CreateCity {...props} />
          </CUDrawer>
        )}
      />
    </>
  );
};

export default ListCities;
