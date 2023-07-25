import { Button } from '@mui/material';
import React from 'react';

const styles = {
    color: "#3D00B7",
    border: "2px solid #3D00B7",
    borderRadius: "40px",
    textAlign: "center",
    padding: "10px 30px",
    boxShadow: "none",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
    textTransform: "capitalize",
    '& svg': {
        mb: "-3px",
        transition: '.3s ease',
        '& path': {
            fill: "#fff"
        }
    },
    '&:hover': {
        color: "#fff",
        bgcolor: "primary.main",
        '& svg': {
            transform: "translateX(5px)",
        }
    }
}
const PrimaryButton = ({ children, sx, iconLess, ...others }) => {
    return (
        <Button sx={{ ...styles, ...sx }} variant="outlined" {...others} >
            {children}
        </Button>
    );
};

export default PrimaryButton;