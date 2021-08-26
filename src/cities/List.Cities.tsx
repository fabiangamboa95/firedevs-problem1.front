import React from "react";
import { Datagrid, List, ListProps, TextField } from "react-admin";
import { Route } from "react-router";
import CreateCity from "./Create.City";
import ShowLocalStudents from "./Show.LocalStudents";
import QuickFormDrawer, { QFDListActions } from "../utils/QuickFormDrawer";

const ListCities: React.FC<ListProps> = (props) => (
  <>
    <List {...props} perPage={10} title="Ciudades" actions={<QFDListActions />}>
      <Datagrid rowClick="expand" expand={<ShowLocalStudents />}>
        <TextField source="nombre" label="Nombre de la ciudad" />
      </Datagrid>
    </List>
    <Route path="/cities/create">
      <QuickFormDrawer {...props}>
        <CreateCity {...props} />
      </QuickFormDrawer>
    </Route>
  </>
);

export default ListCities;
