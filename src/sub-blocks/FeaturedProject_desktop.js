import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoutIcon from "@mui/icons-material/Logout";
import IosShareIcon from "@mui/icons-material/IosShare";
import LinkIcon from "@mui/icons-material/Link";
import { Typography, Box, Stack } from "@mui/material";
import { mxn } from "../../styles/mixins";
//=
export default function FeaturedProject_desktop({ dataObj, mb }) {
  const { projectName, description, githubLink, hostedLink, img, tools } = dataObj; // prettier-ignore
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imgContainer}>
        <Box component="img" src={img} sx={styles.img} />
      </Box>
      <Stack sx={styles.descrip}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={styles.projectName}>
            {projectName}
          </Typography>
          <Typography variant="p" color="secondary" sx={styles.projectDescrip}>
            {description}
          </Typography>
        </Box>

        <Stack>
          <Typography
            variant="p"
            color="secondary"
            sx={{ fontSize: "1rem", mb: 1 }}
          >
            Built with the following languages:
          </Typography>
          <Box sx={styles.languageContainer}>
            {tools.map((el) => (
              <Typography
                variant="span"
                color="secondary"
                sx={styles.languageSpan}
              >
                →&nbsp;{el}
              </Typography>
            ))}
          </Box>
        </Stack>
        <Box sx={{ ...mxn.flexRow }}>
          <GitHubIcon fontSize="large" color="secondary" sx={styles.icon} />
          <IosShareIcon fontSize="large" color="secondary" sx={styles.icon} />
        </Box>
      </Stack>
    </Box>
  );
}
const styles = {
  descrip: { display: "grid", p: 3 },
  container: { display: "grid", gridTemplateColumns: "4fr 5fr" },
  imgContainer: { width: "560px", height: "325px" },
  img: { width: "100%", height: "100%", objectFit: "cover" },
  projectName: { lineHeight: "normal", mb: 1 },
  projectDescrip: { maxWidth: "525px", mb: 1.5, fontSize: "1rem" },
  languageContainer: {
    maxWidth: "450px",
    display: "flex",
    maxWidth: "500px",
    flexWrap: "wrap",
  },
  languageSpan: { mx: 1.75, width: "100px" },
  icon: { mx: 2, mt: 2 },
};
