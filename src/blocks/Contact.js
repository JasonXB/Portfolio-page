import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import { mxn } from "../../styles/mixins";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SubHeader from "../custom-components/reusable/SubHeader";
//=
export default function Contact() {
  return (
    <SectionBlock>
      <NumberedHeader num="04." txt="Contact" />
      <Stack sx={{ ...mxn.flexColumn }}>
        <SubHeader txt="Let's get in touch" />

        <Box sx={styles.optionsBox}>
          <IconButton
            aria-label="copy my email"
            sx={(mui) => styles.iconButton(mui)}
          >
            <EmailOutlinedIcon fontSize="large" sx={styles.icon} />
            <Typography variant="span" sx={(mui) => styles.span(mui)}>
              Copy contact email to clipboard
            </Typography>
          </IconButton>
          <IconButton
            aria-label="redirect to my LinkedIn"
            sx={(mui) => styles.iconButton(mui)}
          >
            <ChatBubbleOutlineOutlinedIcon fontSize="large" sx={styles.icon} />
            <Typography variant="span" sx={(mui) => styles.span(mui)}>
              Send a message on LinkedIn
            </Typography>
          </IconButton>
        </Box>
      </Stack>
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
  },
  iconButton: (mui) => ({
    p: 2.5,
    fontSize: "1.5rem",
    borderRadius: 5,
    color: mui.palette.secondary.main,
    border: `2px solid ${mui.palette.secondary.main}`,
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
