import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <Box my={2}>
      <Container>
        <Box sx={{ borderRadius: "20px", py: 4 }} bgcolor={"#2fccc0"}>
          <Typography
            sx={{ textAlign: "center", pb: 4 }}
            variant="h1"
            color="initial"
          >
            Skill Set
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
