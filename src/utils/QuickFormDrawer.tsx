import { Button, Toolbar, Drawer } from "@material-ui/core";
import { SaveButton, CardActions, CreateButton } from "react-admin";
import { useHistory } from "react-router";

interface QFDrawerToolbarProps {
  basePath?: string | undefined;
}

export const QFDrawerToolbar: React.FC<QFDrawerToolbarProps> = (props) => {
  const history = useHistory();
  const { basePath } = props;

  return (
    <Toolbar {...props}>
      <SaveButton {...props} />
      <Button
        onClick={() => history.push(basePath || "/")}
        style={{ marginLeft: 5 }}
      >
        Cancel
      </Button>
    </Toolbar>
  );
};

export const QFDListActions = ({ basePath }: { basePath?: string }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

interface QuickFormDrawerProps {
  basePath?: string | undefined;
}

const QuickFormDrawer: React.FC<QuickFormDrawerProps> = (props) => {
  const history = useHistory();
  const { basePath, children } = props;

  return (
    <Drawer open anchor="right" onClose={() => history.push(basePath || "/")}>
      {children}
    </Drawer>
  );
};

export default QuickFormDrawer;
