import { Box, Grid, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeToggleAtom } from "../../../jotai-store/atoms/navbarAtom";
import { useAtom } from "jotai";
import axios from "axios";
import "./signup.css";
import AppIcon from "../../../assets/images/robot.png";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormInputText from "../../Shared/form-components/FormTextInput/FormText";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AvatarProfile from "./Avatar";
import avatar1 from "../../../assets/images/profile/gamer.png";
import avatar2 from "../../../assets/images/profile/girl.png";
import avatar3 from "../../../assets/images/profile/man (1).png";
import avatar4 from "../../../assets/images/profile/man (2).png";
import avatar5 from "../../../assets/images/profile/man (3).png";
import avatar6 from "../../../assets/images/profile/man (4).png";
import avatar7 from "../../../assets/images/profile/man (5).png";
import avatar8 from "../../../assets/images/profile/man.png";
import avatar9 from "../../../assets/images/profile/woman.png";
import avatar10 from "../../../assets/images/profile/woman (1).png";
import avatar11 from "../../../assets/images/profile/woman (2).png";
import { userCreationAtom } from "../../../jotai-store/atoms/authAtom";
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "#fff!important",
    fontWeight: "400!important",
    fontSize: "12px",
    marginTop: "-5px",
  },
  cssLabelLight: {
    color: "#3D3B40!important",
    fontWeight: "400!important",
    fontSize: "12px",
    marginTop: "-5px",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#7469B6!important",
  },
}));
const SignUp = () => {
  const classes = useStyles();

  const [theme, setTheme] = useAtom(themeToggleAtom);
  const [userInfo, setUserInfo] = useAtom(userCreationAtom);
  const [isVisible, setIsvisible] = React.useState(false);
  const navigate = useNavigate();

  const AvatarCollection = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
  ];

  // React.useEffect(() => {
  //   console.log("Path from sign up page", userInfo.profilePicture);
  // }, [userInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const userName: any = data.get("userName");
    const email: any = data.get("email");
    const passWord: any = data.get("password");
    console.log({
      userName,
      email,
      passWord,
    });
    try {
      if (userName == "" || email == "" || passWord == "") {
        Swal.fire({
          icon: "info",
          title: "Empty Fields",
          text: "cannot proceed",
          width: 400,
          heightAuto: false,
          background: theme.isDark ? "#D8D9DA" : "#272829",
        });
      } else {
        const response = await axios.post(
          "https://todoapp-master-production.up.railway.app/api/v1/register",
          {
            email: email,
            username: userName,
            password: passWord,
            profilePicture: userInfo.profilePicture,
          }
        );
        const userProfilePic = userInfo.profilePicture;
        console.log(response);
        console.log("User signed up:", response.data.user);
        if (response.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Rgistered",
            text: "You have been registered successfully",
            background: theme.isDark ? "#D8D9DA" : "#272829",
          }).then((resIfSucsess) => {
            if (resIfSucsess.isConfirmed) {
              setUserInfo({
                ...userInfo,
                username: userName,
                password: passWord,
                profilePicture: userProfilePic,
              });
              navigate("/signin");
            }
            else {
              console.log("error");
            }
          });
        }else if(response.status == 400){
          Swal.fire({
            icon: "info",
            title: "User Already registerd!",
            text: "please try with different details",
            background: theme.isDark ? "#D8D9DA" : "#272829",
          })
        } 
        
        else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "cannot proceed",
          });
        }
      }
    } catch (error) {
      // Swal.fire({
      //   icon: "info",
      //   title: "User Already registerd!",
      //   text: "please try with different details",
      //   background: theme.isDark ? "#D8D9DA" : "#272829",
      // })
      console.error(error);
    }
  };
  const handlePassVisibility = () => {
    setIsvisible(!isVisible);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Container component="main" sx={{width:850}}> */}
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={6} md={4} lg={6}>
            <Paper
              sx={{
                backgroundColor: theme.isDark ? "#27282940" : "#B4B4B860",
                height: "520px",
              }}
              variant="elevation"
            >
              <Grid
                className="signUp-main"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item>
                  <Grid
                    className="flicker-in-1"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <img
                      style={{ width: "90px", height: "90px" }}
                      src={AppIcon}
                      alt=""
                    />
                  </Grid>
                  <Box
                    sx={{
                      marginTop: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ mt: 0.5, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                      sx={{
                        color: theme.isDark ? "#3D3B40" : "#C7C8CC",
                        fontFamily: "monospace",
                      }}
                      component="h1"
                      variant="h5"
                    >
                      Sign up
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid
                        className="form-group"
                        container
                        spacing={2}
                        sx={{ px: 2 }}
                      >
                        <Grid item xs={12}>
                          <FormInputText
                            className="userName"
                            autoComplete="given-name"
                            name="userName"
                            required
                            InputLabelProps={{
                              classes: {
                                root: !theme.isDark
                                  ? classes.cssLabel
                                  : classes.cssLabelLight,
                                focused: !theme.isDark
                                  ? classes.cssLabel
                                  : classes.cssLabelLight,
                              },
                            }}
                            InputProps={{
                              classes: {
                                root: classes.notchedOutline,
                                focused: classes.notchedOutline,
                                notchedOutline: classes.notchedOutline,
                              },
                            }}
                            fullWidth
                            id="userName"
                            label="Username"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormInputText
                            required
                            InputLabelProps={{
                              classes: {
                                root: !theme.isDark
                                  ? classes.cssLabel
                                  : classes.cssLabelLight,
                                focused: !theme.isDark
                                  ? classes.cssLabel
                                  : classes.cssLabelLight,
                              },
                            }}
                            InputProps={{
                              classes: {
                                root: classes.notchedOutline,
                                focused: classes.notchedOutline,
                                notchedOutline: classes.notchedOutline,
                              },
                            }}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ position: "relative" }}>
                          <FormInputText
                            required
                            InputLabelProps={{
                              classes: {
                                root: !theme.isDark
                                  ? classes.cssLabel
                                  : classes.cssLabelLight,
                                focused: !theme.isDark
                                  ? classes.cssLabel
                                  : classes.cssLabelLight,
                              },
                            }}
                            InputProps={{
                              classes: {
                                root: classes.notchedOutline,
                                focused: classes.notchedOutline,
                                notchedOutline: classes.notchedOutline,
                              },
                            }}
                            fullWidth
                            name="password"
                            label="Password"
                            type={isVisible ? "text" : "password"}
                            id="password"
                            autoComplete="new-password"
                          />
                          <Box
                            sx={{ position: "absolute", top: 26, right: 10 }}
                          >
                            {isVisible ? (
                              <RemoveRedEyeIcon
                                sx={{
                                  fontSize: "19px",
                                  color: "#65B741",
                                  cursor: "pointer",
                                }}
                                onClick={handlePassVisibility}
                              />
                            ) : (
                              <VisibilityOffIcon
                                sx={{
                                  fontSize: "19px",
                                  color: "#EE4266",
                                  cursor: "pointer",
                                }}
                                onClick={handlePassVisibility}
                              />
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 3,
                            mb: 2,
                            width: 150,
                            backgroundColor: "#7469B6",
                            "&:hover": {
                              backgroundColor: "#7469B680!important",
                            },
                          }}
                        >
                          Sign Up
                        </Button>
                      </Grid>

                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link
                            sx={{
                              color: theme.isDark ? "#3D3B40" : "#C7C8CC",
                              textDecoration: "none",
                              mr: 1,
                            }}
                            href="/signin"
                            variant="body2"
                          >
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <div
                  style={{
                    height: "500px",
                    width: "1px",
                    backgroundColor: "grey",
                    marginTop: "10px",
                  }}
                ></div>
                <Grid item sx={{ width: "700px" }}>
                  <Box className="profole-box">
                    <Grid>
                      <h4 style={{ textAlign: "center", marginBottom: "10px",color: theme.isDark ? "#3D3B40" : "#C7C8CC",
                        fontFamily: "monospace", }}>
                        Select Your Avatar
                      </h4>
                      <AvatarProfile images={AvatarCollection} />
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default SignUp;
