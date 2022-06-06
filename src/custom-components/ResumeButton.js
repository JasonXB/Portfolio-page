import React from "react";
import Button from "@mui/material/Button";

export default function ResumeButton({ customVariant }) {
  if (!customVariant)
    return (
      <Button variant="outlined" color="primary">
        Resume
      </Button>
    );
  else
    return (
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          width: "50%",
          mx: "auto",
          color: "white",
          borderColor: "white",
          mt: 0,
          mb: 2,
          ["@media (max-width: 400px)"]: { width: "100%"}
        }}
      >
        Resume Download
      </Button>
    );
}
