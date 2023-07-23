import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import imgPro1 from "../../assets/images/projects/scrnli_7_15_2023_10-34-36 PM.png";

import { projects } from "@/data/projects/ProjectsHome.data";

const Projects = () => {
  const style = {
    backgroundImage: imgPro1,
    width: "500px",
    height: "400px",
  };
  return (
    <Box>
      <Container>
        <Typography variant="h1" color="initial">
          Projects
        </Typography>
        <Grid container spacing={2}>
          {
            projects.map(({id,image}) => <Grid item md={6} xs={12} key={id}>
            <Box
              sx={{
                backgroundImage: `url("${image}")`,
                width: "100%",
                height: "500px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px"
              }}
            ></Box>
          </Grid>)
          }
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                backgroundImage: `url("/coffeShop.png")`,
                width: "100%",
                height: "500px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px"
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
