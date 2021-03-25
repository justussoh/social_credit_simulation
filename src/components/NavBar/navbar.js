import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavBar = ({ isFixed }) => {
  return (
    <AppBar
      position={isFixed ? "fixed" : "static"}
      color={isFixed ? "transparent" : ""}
      style={{ backgroundColor: `${isFixed ? "inherit" : "#05321e"}` }}
      elevation={0}
    >
      <Toolbar>
        <Link to="/">
          <Button color="secondary">Game</Button>
        </Link>
        <Link to="/about">
          <Button color="secondary">About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
