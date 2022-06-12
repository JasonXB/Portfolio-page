import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import { mxn } from "../../styles/mixins";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SubHeader from "../custom-components/reusable/SubHeader";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import useRedirect from "../../src/utility-functions/useRedirect";
import Link from "@mui/material/Link";
//=
export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const redirectToLinkedIn = useRedirect(
    "https://www.linkedin.com/in/jason-bustamante"
  );
  const handleClick = () => {
    navigator.clipboard.writeText("jasonxb96@gmail.com"); // Copy contact email to keyboard
    setOpen(true); // Tell users it worked with an MUI snackbar
  };
  const handleClose = () => setOpen(false);

  // The snack bar that comes up
  // Can disable it by waiting for 3s, clicking on viewport, or hitting the x icon
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <SectionBlock>
      <NumberedHeader num="04." txt="Contact" />
      <Stack sx={{ ...mxn.flexColumn }}>
        <SubHeader txt="Let's get in touch!" />
        <Box sx={styles.optionsBox}>
          <IconButton
            aria-label="copy my email"
            sx={(mui) => styles.iconButton(mui)}
            onClick={() => handleClick()}
          >
            <EmailOutlinedIcon fontSize="large" sx={styles.icon} />
            <Typography variant="span" sx={(mui) => styles.span(mui)}>
              Copy contact email to clipboard
            </Typography>
          </IconButton>
          <Link
            href="https://www.linkedin.com/in/jason-bustamante/"
            sx={{ textDecoration: "none" }}
          >
            <IconButton
              aria-label="Redirect to my LinkedIn"
              sx={(mui) => styles.iconButton(mui)}
            >
              <PersonAddIcon fontSize="large" sx={styles.icon} />
              <Typography variant="span" sx={(mui) => styles.span(mui)}>
                Connect with me on LinkedIn
              </Typography>
            </IconButton>
          </Link>
        </Box>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Copied contact email"
        action={action}
      />
    </SectionBlock>
  );
}

const styles = {
  optionsBox: {
    display: "grid",
    justifyContent: "center",
    gap: 4,
    width: "100%",
    maxWidth: "800px",
    mt: "1.5rem",
    ["@media (min-width: 1200px)"]: {
      gridTemplateColumns: "1fr 1fr",
      maxWidth: "1400px",
    },
  },
  iconButton: (mui) => ({
    p: 2.5,
    fontSize: "1.5rem",
    borderRadius: 5,
    color: mui.palette.secondary.main,
    border: `2px solid ${mui.palette.secondary.main}`,
    width: "100%",
    // On hover...
    "&:hover": {
      // Color the border a diff theme color
      border: `2px solid ${mui.palette.primary.main}`,
      // Color the text a diff theme color
      "*": { color: mui.palette.primary.main },
    },
  }),
  icon: {
    display: "none",
    ["@media (min-width: 600px)"]: { display: "inline-block", mr: 2 },
  },
  span: (mui) => ({
    color: mui.palette.secondary.main,
    "&:hover": { "*": { border: `2px solid ${mui.palette.primary.main}` } },
    ["@media (max-width: 600px)"]: { fontSize: "1.25rem" },
  }),
};
