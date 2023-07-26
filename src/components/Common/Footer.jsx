import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import logo from "/public/images/logo-footer.svg";
import Image from "next/image";
import footerData from "../../data/footer.data";

const Footer = () => {
  const iconStyle = {
    padding: "0",
    marginLeft: "10px",
    "& svg": {
      transition: ".3s ease",
      "& path": {
        fill: "#fff",
      },
    },
    "&:hover": {
      // bgcolor: "#fff",
      "& svg": {
        transform: "translateY(-5px)",
        "& path": {
          fill: "#3D00B7",
          stroke: "#FDFEFE",
        },
      },
    },
  };

  return (
    <Box bgcolor={"#3D00B7"} py={8}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Image width={150} height={150} src={logo} alt="img-logo" />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: "400" }} color="#fff">
            Living, learning, & leveling up <br /> one day at a time.
          </Typography>
          <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
            {footerData.map(({ icons, url, id }) => (
              <Link href={url} key={id}>
                <Box sx={iconStyle}>{icons}</Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
