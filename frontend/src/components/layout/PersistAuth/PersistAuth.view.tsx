import React, { useRef, useState, useEffect, ReactElement } from "react";
import { PersistAuthProps } from "./PersistAuth.props";
import { Container } from "./PersistAuth.style";
import { useAppSelector } from "app/hooks";
import { selectCurrentToken } from "features/auth/authSlice";
import { useRefreshMutation } from "features/auth/authApiSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";

const PersistAuth = (props: PersistAuthProps): JSX.Element => {
  const token = useAppSelector(selectCurrentToken);
  const effectRan = useRef(false);
  const [trueSuccess, setTrueSuccess] = useState(false);
  const navigate = useNavigate();
  const [refresh, { isUninitialized, isSuccess, isError }] =
    useRefreshMutation();

  useEffect((): any => {
    const verifyRefreshToken = async () => {
      console.log("verifying refresh token");
      try {
        const response = await refresh();
        console.log(response, "response from verify token");
        setTrueSuccess(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (!token) verifyRefreshToken();
    return () => (effectRan.current = true);
    // eslint-disable-next-line
  }, []);

  let content: any;
  // if (isSuccess && trueSuccess) {
  //   //persist: yes, token: yes
  //   console.log("success");
  //   content = <Outlet />;
  // } else if (token && isUninitialized) {
  //   //persist: yes, token: yes
  //   console.log("token and uninit");
  //   console.log(isUninitialized);
  //   content = <Outlet />;
  // }

  if (isError) {
    console.log("error");
    navigate("/");
  } else if (isSuccess && trueSuccess) {
    content = <Outlet />;
  } else if (token && isUninitialized) {
    content = <Outlet />;
  }

  return content;
};

export default PersistAuth;
