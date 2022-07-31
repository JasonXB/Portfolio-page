import React from "react";
import Button from "@mui/material/Button";

export default function ResumeButton({ customVariant }) {
  let resumeLink =
    "https://drive.google.com/file/d/1hhPNZU92opLDshf7BD6PhVbVkp8PV_BO/view?usp=sharing";
  if (!customVariant)
    return (
      <a href={resumeLink}>
        <Button variant="outlined" color="primary">
          Resume
        </Button>
      </a>
    );
  else
    return (
      <a style={{ margin: "auto" }} href={resumeLink}>
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
