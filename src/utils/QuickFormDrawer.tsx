import { Button, Toolbar, Drawer } from "@material-ui/core";
import { SaveButton, CardActions, CreateButton, useRefresh } from "react-admin";
import { useHistory } from "react-router";
import { useStore } from "react-redux";

interface QFDrawerToolbarProps {
  basePath?: string | undefined;
  resource?: string;
}

export const QFDrawerToolbar: React.FC<QFDrawerToolbarProps> = (props) => {
  const history = useHistory();
  const { basePath, resource } = props;
  const refresh = useRefresh();
  const store = useStore();
  const {
    admin: { resources },
  } = store.getState();
  const listTotal = resources[resource || ""].list.total;

  return (
    <Toolbar {...props}>
      <SaveButton
        {...props}
        onSuccess={() => {
          history.push(basePath || "/");
          if (!listTotal) {
            setTimeout(refresh, 500);
          }
        }}
      />
      <Button
        onClick={() => {
          history.push(basePath || "/");
        }}
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
