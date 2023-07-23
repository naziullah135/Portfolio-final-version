import { Button } from '@mui/material';
import React from 'react';

const styles = {
    color: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    padding: "10px 20px",
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
        bgcolor: "primary.main",
        '& svg': {
            transform: "translateX(5px)",
        }
    }
}
const PrimaryButton = ({ children, sx, iconLess, ...others }) => {
    return (
        <Button sx={{ ...styles, ...sx }} variant='contained' {...others} >
            {children}
        </Button>
    );
};

export default PrimaryButton;