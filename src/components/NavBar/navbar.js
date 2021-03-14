import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
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
