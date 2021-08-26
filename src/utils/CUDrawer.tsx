import { Button, Toolbar, Drawer } from "@material-ui/core";
import { SaveButton, CardActions, CreateButton } from "react-admin";
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

interface CUToolbarProps {
  basePath?: string | undefined;
}

export const CUDToolbar: React.FC<CUToolbarProps> = (props) => {
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

export const CUListActions = ({ basePath }: { basePath?: string }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

export default CUDrawer;
