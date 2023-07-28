import { FC } from "react";
import "./AppLayout.scss";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
};

export default AppLayout;
