import { Box, Typography } from "@mui/material";
import Heroo from "../assets/heroimage.jpeg";
import Button from "@mui/material/Button";


const Hero = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Heroo})`,
          backgroundSize: "cover",
          height: { xs: "300px", md: "600px" },
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap:{xs:1, md:4}
          }}
        >
          <Typography
            sx={{ color: "#ffff", fontSize: { xs: "18px", md: "35px" } }}
          >
            The largest community of photo enthusiasts
          </Typography>
          <Box></Box>
          <Box>
            <Button variant="contained">Joine Today</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
