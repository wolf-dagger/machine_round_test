import { Box, Container, Typography } from "@mui/material";
import SnapPhotoCard from "../ui/SnapPhotoCard";
import { snapphotodata } from "../data/sanpphotodata";

const SnapPhoto = () => {
  return (
    <>
      <Container sx={{ mt: { xs: "20px", md: "120px" } }}>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: { xs: "800", md: "600" },
            fontSize: { xs: "20px", md: "48px" },
            lineHeight: { xs: "20px", md: "60px" },
          }}
        >
          <span style={{ fontFamily: "Montserrat" }}>
            Snap photos and share like
          </span>{" "}
          <br /> <span>never before</span>
        </Typography>
        <Box
          sx={{
            mt: { xs: "30px", md: "60px" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: "40px", md:'50px' },
          }}
        >
          {snapphotodata.map((data) => (
            <SnapPhotoCard
              key={data.id}
              title={data.title}
              des={data.discreption}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default SnapPhoto;
