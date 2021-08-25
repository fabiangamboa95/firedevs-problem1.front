import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import Students from "./students";
import Professors from "./professors";
import Groups from "./groups";

const App = () => (
  <Admin title="Firedevs Assessment" dataProvider={dataProvider}>
    <Resource name="students" {...Students} />
    <Resource name="groups" {...Groups} />
    <Resource name="professors" {...Professors} />
  </Admin>
);

export default App;
