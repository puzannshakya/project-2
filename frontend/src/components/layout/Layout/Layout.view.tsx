import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LayoutProps } from "./Layout.props";
import { Container, Main, Side } from "./Layout.style";
import Navigation from "../Navigation";
import NavigationHeader from "../NavigationHeader";
import { useLocation } from "react-router-dom";
import { selectUserInfo } from "features/auth/authSlice";
import { useAppSelector } from "app/hooks";

const Layout = (props: LayoutProps): JSX.Element => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const userInfo = useAppSelector(selectUserInfo);
  const formatPath = (path: string) => {
    path = path.replace(/^\//, "");
    path = path.replace(/-+/g, " ");
    path = path.replace(/\b\w/g, (char: string) => char.toUpperCase());

    return path;
  };
  const formattedPath = formatPath(currentUrl);
  const modifiedPath = formattedPath.split("/")[0];

  return (
    <Container>
      <Side>
        <Navigation />
      </Side>
      <Main>
        <NavigationHeader
          sectionName={
            modifiedPath === "Dashboard"
              ? `Hello ${userInfo.firstName}, let's farm!`
              : modifiedPath
          }
        />
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
