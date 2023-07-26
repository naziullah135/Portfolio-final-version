import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import mainImg from "/public/images/profile-cut-3.png";
import PrimaryButton from "../Custom/PrimaryButton";

const Hero = () => {

  const styles = {
    
  }
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid sx={{styles}}  item md={6} sm={12} xs={12}>
            <Typography variant="h1" mt={4} py={2} color="initial">
              Naziullah Shawn
            </Typography>
            <Typography mt={4} variant="h3" color="initial">
              Designer, Frontend Developer, and Instructor
            </Typography>
            <Typography variant="p" color="initial">
              Welcome to my portfolio! I'm a passionate frontend developer with
              a flair for creating stunning user interfaces and seamless
              experiences. Explore my projects and witness the perfect blend of
              design and code.
            </Typography>
            <Box mt={4} py={4}>
              <PrimaryButton color="primary">Book a Meeting</PrimaryButton>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{textAlign:'end'}}>
            <Image style={{height:"auto", width:"500px", height:"100%"}} src={mainImg} alt="main-image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
