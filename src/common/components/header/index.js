import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

const Header = props => (
  <div className="TodoHeader">
    <Typography variant="h3" gutterBottom>
      {props.children}
    </Typography>
  </div>
);

export default Header;
