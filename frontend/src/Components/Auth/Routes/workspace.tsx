import React from "react";
import { Outlet, Navigate, Route, Routes } from "react-router-dom";
import { useAtom } from "jotai"; // Ensure correct import path
import { userAuthAtom } from "../../../jotai-store/atoms/authAtom";
import SignIn from "../signin/signin";
import SignUp from "../signup/signup";
import AboutUs from "../../Aboutus/aboutus";
import ToDo from "../../Todo/todo";

const WorkSpace = () => {
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);

  const allProtectedRoutes = [
    { id: 1, path: "/aboutus", component: AboutUs },
    { id: 2, path: "/todo", component: ToDo },
  ];
  return (
      <Routes>
        {allProtectedRoutes.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Routes>
  );
};

export default WorkSpace;
