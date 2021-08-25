import { Admin, Resource } from "react-admin";
import dataProvider from "./utils/dataProvider";
import Students from "./students";
import Professors from "./professors";
import Groups from "./groups";
import Cities from "./cities";

const App = () => (
  <Admin title="Firedevs Assessment" dataProvider={dataProvider}>
    <Resource name="students" {...Students} />
    <Resource name="groups" {...Groups} />
    <Resource name="professors" {...Professors} />
    <Resource name="cities" {...Cities} />
  </Admin>
);

export default App;
