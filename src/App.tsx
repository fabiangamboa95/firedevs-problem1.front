import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import Students from "./students";

const App = () => (
  <Admin title="Firedevs Assessment" dataProvider={dataProvider}>
    <Resource name="students" {...Students} />
  </Admin>
);

export default App;
