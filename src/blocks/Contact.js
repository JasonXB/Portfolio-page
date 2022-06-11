import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import { Typography, Box, Stack } from "@mui/material";
import { mxn } from "../../styles/mixins";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SubHeader from "../custom-components/reusable/SubHeader";
//=
export default function Contact() {
  return (
    <SectionBlock>
      <NumberedHeader num="04." txt="Contact" />
      <Stack sx={styles.container}>
        <SubHeader txt="Let's get in touch" />

        <Box sx={styles.optionsBox}>
          <Stack sx={styles.contactOption}>
            <EmailOutlinedIcon
              sx={styles.icon}
            />
            <Typography variant="p" color="secondary" sx={{ mt: "1rem" }}>
              jasonxb96@hotmail.com
            </Typography>
          </Stack>
          <Stack sx={styles.contactOption}>
            <ChatBubbleOutlineOutlinedIcon
              sx={styles.icon}
            />
            <Typography variant="p" color="secondary" sx={{ mt: "1rem" }}>
              Click to find me on LinkedIn
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </SectionBlock>
  );
}

const styles = {
  container: {
    borderRadius: 5,
    // background: "#8892b0", //! change
    // p: 5,
  },
  optionsBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    mt: "1.5rem",
  },
  contactOption: {
    ...mxn.flexColumn,
    // boxShadow: "rgba(134, 151, 168, 1)",
  },
  icon: {
    p: 2.5,
    fontSize: "5rem",
    borderRadius: 5,
    color: "#64ffda",
    border: "2px solid #64ffda",
  },
};
