import { Button, Toolbar, Drawer } from "@material-ui/core";
import { SaveButton } from "react-admin";
import { useHistory } from "react-router";

interface CUDProps {
  basePath?: string | undefined;
}

const CUDrawer: React.FC<CUDProps> = (props) => {
  const history = useHistory();
  const { basePath, children } = props;

  return (
    <Drawer open anchor="right" onClose={() => history.push(basePath || "/")}>
      {children}
    </Drawer>
  );
};

export const CUDToolbar: React.FC<CUDProps> = (props) => {
  const history = useHistory();
  const { basePath } = props;

  return (
    <Toolbar {...props}>
      <SaveButton />
      <Button
        onClick={() => history.push(basePath || "/")}
        style={{ marginLeft: 5 }}
      >
        Cancel
      </Button>
    </Toolbar>
  );
};

export default CUDrawer;
