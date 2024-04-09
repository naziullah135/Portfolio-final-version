import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import mainImg from "/public/images/profile-cut-3.png";
import PrimaryButton from "../Custom/PrimaryButton";
import Link from "next/link";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h1" mt={4} py={2} color="initial">
              Naziullah Shawn
            </Typography>
            <Typography mt={2} mb={2} variant="h3" color="initial">
              Full-Stack Developer and Instructor
            </Typography>
            <Typography variant="p" color="initial">
              Welcome to my portfolio! I'm a passionate frontend developer with
              a flair for creating stunning user interfaces and seamless
              experiences. Explore my projects and witness the perfect blend of
              design and code.
            </Typography>
            <Box mt={4} py={4}>
              <Link href="#contact"><PrimaryButton color="primary">Book a Meeting</PrimaryButton></Link>
            </Box>
            <Grid container mt={8} sx={{justifyContent:"center"}}>
              <Grid item md={6} sm={12} xs={12}>
                <Image
                  width={40}
                  height={40}
                  src="/icons/nextjs.svg"
                />
                <Image
                   style={{marginLeft: 18}}
                width={40}
                height={40}
                src="/icons/react.svg"
                alt="react-icons"
              />
                <Image
                  style={{marginLeft: 18}}
                width={40}
                height={40}
                src="/icons/node-js.svg"
                alt="react-icons"
              />
                <Image
                  style={{marginLeft: 18}}
                width={40}
                height={40}
                src="/icons/express-js.svg"
                alt="react-icons"
              />
                <Image
                  style={{marginLeft: 18}}
                width={40}
                height={40}
                src="/icons/mongodb.svg"
                alt="react-icons"
              />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Image
                  width={40}
                  height={40}
                  src="/icons/bootstrap.svg"
                />
                <Image
                style={{marginLeft: 18}}
                  width={40}
                  height={40}
                  src="/icons/material-ui.svg"
                />
                <Image
                style={{marginLeft: 18}}
                  width={40}
                  height={40}
                  src="/icons/tailwind-css.svg"
                />
                <Image
                style={{marginLeft: 18}}
                  width={40}
                  height={40}
                  src="/icons/firebase.svg"
                />
                <Image
                style={{marginLeft: 18}}
                  width={40}
                  height={40}
                  src="/icons/javascript.svg"
                />
              </Grid>
            </Grid>
            {/* <Box gap={2} sx={{ display: "flex", mt: 5 }}>
              <Image
                width={40}
                height={40}
                src="/icons/nextjs.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/react.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/node-js.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/express-js.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/mongodb.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/bootstrap.svg"
                alt="react-icons"
              />

              <Image
                width={40}
                height={40}
                src="/icons/material-ui.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/tailwind-css.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/firebase.svg"
                alt="react-icons"
              />
              <Image
                width={40}
                height={40}
                src="/icons/javascript.svg"
                alt="react-icons"
              />
            </Box> */}
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "1/1",
              }}
            >
              <Image
                fill
                style={{objectFit: "cover" }}
                src={mainImg}
                alt="main-image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
