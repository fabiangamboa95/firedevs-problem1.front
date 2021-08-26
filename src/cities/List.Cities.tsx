import React from "react";
import { Datagrid, List, ListProps, TextField } from "react-admin";
import { Route } from "react-router";
import CreateCity from "./Create.City";
import ShowLocalStudents from "./Show.LocalStudents";
import CUDrawer, { CUListActions } from "../utils/CUDrawer";

const ListCities: React.FC<ListProps> = (props) => (
  <>
    <List {...props} perPage={10} title="Ciudades" actions={<CUListActions />}>
      <Datagrid rowClick="expand" expand={<ShowLocalStudents />}>
        <TextField source="nombre" label="Nombre de la ciudad" />
      </Datagrid>
    </List>
    <Route path="/cities/create">
      <CUDrawer {...props}>
        <CreateCity {...props} />
      </CUDrawer>
    </Route>
  </>
);

export default ListCities;
