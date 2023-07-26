"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import InputField from "../Custom/InputField";
import PrimaryButton from "../Custom/PrimaryButton";
// import emailjs from '@emailjs/browser';
import { useState } from "react";
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
  return (
    <Box id={"contact"} sx={{ bgcolor: "light.main", p: "24px 35px", my: 8 }}>
      <Container>
        <Typography
          sx={{ textAlign: "center", fontWeight: "400" }}
          variant="h2"
          color="text.darkGray"
        >
          Thanks for taking the time to reach <br /> out. How can I help you
          today?
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
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
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
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
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
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
            </Grid>
          </Grid>
          <PrimaryButton
            sx={{ mt: 2, borderRadius: "none" }}
            fullWidth
            type="submit"
          >
            Submit
          </PrimaryButton>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
