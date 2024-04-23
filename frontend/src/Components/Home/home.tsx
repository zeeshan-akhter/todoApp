import React from "react";
import "./home.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Navbar from "../Navbar/navbar";
import { useAtom } from "jotai";
import listImg from "../../assets/images/checklist.png";
import useLocalStorage from "use-local-storage";
import { themeToggleAtom } from "../../jotai-store/atoms/navbarAtom";
import { userAuthAtom } from "../../jotai-store/atoms/authAtom";
import { Navigate, useLocation } from "react-router-dom";
import WorkSpace from "../Auth/Routes/workspace";
import PublicRoutes from "../Auth/Routes/publicroutes";
const Home = () => {
  const location = useLocation();
  const [theme, setTheme] = useAtom(themeToggleAtom);
  const [mode, setMode] = useLocalStorage("mode", false);
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  return (
    <>
      <div
        style={{
          transition: "all 0.5s ease-out",
          backgroundColor: mode ? "#2D3250" : "#D8D9DA",
        }}
        className="App"
      >
        <Navbar />
        {location.pathname === "/" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "90px",
            }}
          >
            <Card className="workspace"></Card>
            <Grid sx={{display:"flex",justifyContent:"space-around",flexDirection:"column"}}>
              <Card className="workspace2"></Card>
              <Card className="workspace2-2"></Card>
            </Grid>

            <Card className="workspace3"></Card>
          </div>
        ) : (
          <>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: "80px",
              }}
            >
              {isAuth.isAuthenticated ? <WorkSpace /> : <PublicRoutes />}
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
