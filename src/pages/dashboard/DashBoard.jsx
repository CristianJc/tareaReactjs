import Button from "@mui/material/Button";
import React from "react";
import Copyright from "../../Components/pure/forms/Copyright";
import { useHistory } from "react-router-dom";

const DashBoard = () => {
  const history = useHistory();
  const logout = () => {
    history.push("/login");
  };

  return (
    <div>
      <Button variant="contained" onClick={logout}> logout</Button>
      <Copyright></Copyright>
    </div>
  );
};

export default DashBoard;
