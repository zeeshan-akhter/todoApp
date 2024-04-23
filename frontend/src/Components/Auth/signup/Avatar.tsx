import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import { themeToggleAtom } from "../../../jotai-store/atoms/navbarAtom";
import { useAtom } from "jotai";
import unknownUser from "../../../assets/images/profile/unknownUser.png";
import { userCreationAtom } from "../../../jotai-store/atoms/authAtom";
interface AvatarProps {
  images: string[];
}

const AvatarProfile: React.FC<AvatarProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useAtom(userCreationAtom);
  const [theme, setTheme] = useAtom(themeToggleAtom);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    console.log("image",image)
  };
  const handleConfirm = () => {
    if (selectedImage !== null) {
      Swal.fire({
        icon: "success",
        title: "Avatar selected successfully",
        text: "Cannot proceed",
        width: 400,
        heightAuto: false,
        background: theme.isDark ? "#D8D9DA" : "#272829",
      });
      setUserInfo({...userInfo,profilePicture:selectedImage})
    } else {
      Swal.fire({
        icon: "info",
        title: "Please select an avatar first",
        text: "Cannot proceed",
        width: 400,
        heightAuto: false,
        background: theme.isDark ? "#D8D9DA" : "#272829",
      });
    }
  };
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        {/* <Card> */}
        {/* <CardContent> */}
        {selectedImage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Typography variant="h5" component="h2" gutterBottom>
                  Selected Image
                </Typography> */}
            <div
              style={{
                borderRadius: "50%",
                border: "5px solid #fff",
                width: "85px",
                height: "85px",
                display: "flex",
                justifyContent: "center",
                transition: "opacity 0.5s ease-in",
                opacity: 1,
              }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                style={{ width: "80px" }}
              />
            </div>
          </div>
        )}
        {/* </CardContent> */}
        {/* </Card> */}
        {!selectedImage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                borderRadius: "50%",
                border: "5px solid #fff",
                width: "85px",
                height: "85px",
                display: "flex",
                justifyContent: "center",
                transition: "opacity 0.5s ease-in",
                opacity: 1,
              }}
            >
              <img
                src={unknownUser}
                alt="Unknown User"
                style={{ width: "80px" }}
              />
            </div>
          </div>
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={1}
          sx={{ display: "flex", justifyContent: "center", px: 8 }}
        >
          {images.map((image, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={4}
              md={3}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                style={{ width: "40px", cursor: "pointer" }}
                onClick={() => handleImageClick(image)}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Grid container justifyContent="center">
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
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AvatarProfile;
