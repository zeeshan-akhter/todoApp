import React from 'react'
import { Outlet, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from '../../Aboutus/aboutus';
import SignUp from '../signup/signup';
import SignIn from '../signin/signin';

const PublicRoutes = () => {
    const allPublicRoutes = [
        { id: 1, path: "/aboutus", component: AboutUs },
        { id: 2, path: "/signup", component: SignUp },
        { id: 3, path: "/signin", component: SignIn },
      ];
      return (
          <Routes>
            {allPublicRoutes.map((item) => (
              <Route key={item.id} path={item.path} element={<item.component />} />
            ))}
          </Routes>
      );
}

export default PublicRoutes
