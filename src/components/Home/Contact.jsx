"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import InputField from "../Custom/InputField";
import PrimaryButton from "../Custom/PrimaryButton";
// import emailjs from '@emailjs/browser';
import { useState } from "react";
import {
  DraftsOutlined,
  PhoneCallback,
  PhoneInTalk,
  PhoneLockedOutlined,
} from "@mui/icons-material";
import footerData from "@/data/footer.data";
import Link from "next/link";
// import Swal from 'sweetalert2';
const Contact = () => {
  const [formData, setFormData] = useState({});

  // const handleOnChange = (e) => {
  //     setFormData((pre) => ({
  //         ...pre,
  //         [e.target.name]: e.target.value
  //     }))
  // }
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     emailjs.send(
  //         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //         formData,
  //         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  //     )
  //         .then(() => {
  //             Swal.fire({
  //                 icon: "success",
  //                 title: "Good job!",
  //                 text: "Message Send Successfully!",
  //                 timer: 2000
  //             })
  //             e.target.reset();
  //         }, () => {
  //             Swal.fire({
  //                 icon: 'error',
  //                 title: 'Oops...',
  //                 text: 'Something went wrong!',
  //                 timer: 2000
  //             })
  //         });
  // }

  const iconStyle = {
    padding: "0",
   
    "& svg": {
      transition: ".3s ease",
      "& path": {
        // fill: "#fff",
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
    <Box id={"contact"} sx={{ bgcolor: "light.main", p: "24px 35px", my: 8 }}>
      <Container>
        <Typography  
          sx={{ textAlign: "center", fontWeight: "400", pb:8 }}
          variant="h2"
          color="text.darkGray"
        >
          Thanks for taking the time to reach <br /> out. How can I help you
          today?
        </Typography>
        <Grid container spacing={2}>
          <Grid md={6} sm={6} xs={12}>
            <Typography mt={2} variant="h3" color="initial">
              DON'T BE SHY !
            </Typography>
            <Typography variant="h6" color="palette.lightGray">
              {" "}
              Feel free to get in touch with me. I am always open to <br />{" "}
              discussing new projects, creative ideas or opportunities <br /> to
              be part of your visions.
            </Typography>
           <Box mt={4}>
           <Typography variant="h3" color="initial">
              Contact information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", pt: 2, }}>
              <DraftsOutlined />
              <Typography sx={{ pl: 1 }} variant="subtitle1" color="initial">
                naziullah.shawn@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pt: 2 }}>
              <PhoneInTalk />
              <Typography sx={{ pl: 1 }} variant="subtitle1" color="initial">
                01857526232
              </Typography>
            </Box>
           </Box>
            <Box mt={4}>
              <Typography variant="h3" color="initial">
                Connect with me
              </Typography>
              <Box gap={2} sx={{ display: "flex", mt:2, }}>
                {footerData.map(({ icons, url, id }) => (
                  <Link href={url} key={id}>
                    <Box sx={iconStyle}>{icons}</Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid md={6} sm={6} xs={12}>
            <form>
              <InputField
                required
                size="small"
                margin="normal"
                fullWidth
                variant="outlined"
                type="text"
                label="Full name"
                name="name"
              />

              <InputField
                required
                size="small"
                margin="normal"
                fullWidth
                variant="outlined"
                type="number"
                label="Phone number"
                name="phone"
              />
              <InputField
                required
                size="small"
                margin="normal"
                fullWidth
                variant="outlined"
                type="email"
                label="Email address"
                name="email"
              />
              <InputField
                size="small"
                margin="normal"
                fullWidth
                variant="outlined"
                type="text"
                label="Company name"
                name="companyName"
              />
              <InputField
                required
                size="small"
                margin="normal"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                type="text"
                label="Anything else?"
                name="message"
              />
              <PrimaryButton
                sx={{ mt: 2, borderRadius: "none" }}
                fullWidth
                type="submit"
              >
                Submit
              </PrimaryButton>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
