import React from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
import { mxn } from "../../styles/mixins";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";

export default function About() {
  return (
    <SectionBlock>
      <NumberedHeader num="01." txt="About Me" />
      <Container
        sx={{
          ...mxn.flexRow,
          alignItems: "start",
          background: "rgba(2,12,27,0.82)",
        }}
      >
        <Stack sx={{ mr: "3.125rem" }}>
          <Typography>NAME:</Typography>
          <Typography>AGE:</Typography>
          <Typography>EMAIL:</Typography>
        </Stack>
        {/* <img src="/images/me.jpg" alt="Photo of Jason XB" /> */}
      </Container>
    </SectionBlock>
  );
}
