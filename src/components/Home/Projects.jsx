"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { projects } from "@/data/projects/ProjectsHome.data";
import Link from "next/link";

const Projects = () => {
  // const [margin, setMargin] = useState(0);
  // const [pId, setPid] = useState();
  return (
    <Box py={8} bgcolor={"#F2F4F4"}>
      <Container>
        <Grid container spacing={4}>
          {projects.map(({ id, image, url }) => (
            <Grid item md={6} xs={12} key={id}>
              <Box sx={{ overflow: "hidden", borderRadius: "20px" }}>
                <Box
                  // onMouseOver={() => {
                  //   setPid(id), setMargin(20);
                  // }}
                  // onMouseLeave={() => {
                  //   setPid(null), setMargin(0);
                  // }}
                  sx={{
                    backgroundImage: image,
                    width: "100%",
                    height: "500px",
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow:
                        "rgba(174, 182, 191, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    },
                  }}
                >
                  <Box
                    p={4}
                    sx={{
                      display: "flex",
                      height: "100%",
                      width: "100%",
                      justifyContent: "end",
                      position: "absolute",
                      opacity: "0",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      "&:hover": { opacity: "1" },
                      borderRadius: "20px",
                    }}
                  >
                    <Link href={url}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 95 96"
                        fill="none"
                      >
                        <circle
                          cx="47.8124"
                          cy="47.999"
                          r="47.1484"
                          fill="#3D00B7"
                        />
                        <path
                          d="M43.4893 55.845L52.1317 48.2361L43.4893 40.1518"
                          stroke="#ffff"
                          stroke-width="6.0284"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Link>
                  </Box>
                  <Box>
                    <Box
                      p={4}
                      // style={pId === id ? { margin: `${margin}px` } : {}}
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        color: "white",
                        backgroundColor: "primary.main",
                        borderRadius: "0px 20px 0px 20px",
                      }}
                    >
                      <Typography variant="h4">Coffee Shop Projects</Typography>
                      <Typography variant="subtitle1">
                        Full-Stack App
                      </Typography>
                      <Typography variant="subtitle1">icons</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
