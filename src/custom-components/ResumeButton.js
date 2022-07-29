import React from "react";
import Button from "@mui/material/Button";

export default function ResumeButton({ customVariant }) {
  if (!customVariant)
    return (
      <a href="https://drive.google.com/file/d/1rBFwrgGUGdEdTkoNjVxDasH1-uMLn0GL/view?usp=sharing">
        <Button variant="outlined" color="primary">
          Resume
        </Button>
      </a>
    );
  else
    return (
      <a style={{margin: "auto"}} href="https://drive.google.com/file/d/1ogbfaF6RY__suRVBi_6oFM8g3mSmFAPV/view">
        <Button
          variant="outlined"
          color="info"
          sx={{
            px: 4,
            color: "white",
            borderColor: "white",
            mt: 2,
            mb: 2,
            ["@media (max-width: 400px)"]: { width: "100%" },
          }}
        >
          Resume Download
        </Button>
      </a>
    );
}
