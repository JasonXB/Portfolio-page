import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { Typography, Box, Stack } from "@mui/material";
import { mxn } from "../../styles/mixins";
import MoveUpIcon from '@mui/icons-material/MoveUp';
//=
export default function FeaturedProject_desktop({ dataObj, mb }) {
  const { projectName, description, githubLink, hostedLink, img, tools } = dataObj; // prettier-ignore
  return (
    <Box sx={styles.container}>
      <Box component="a" sx={styles.imgContainer} href={hostedLink}>
        <Box component="img" src={img} sx={styles.img} />
      </Box>
      <Stack sx={styles.descrip}>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h4"
            component="a"
            href={hostedLink}
            sx={(mui) => styles.projectName(mui)}
          >
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
            {tools.map((el, i) => (
              <Typography
                variant="span"
                color="secondary"
                sx={styles.languageSpan}
                key={i}
              >
                →&nbsp;{el}
              </Typography>
            ))}
          </Box>
        </Stack>
        <Box sx={{ ...mxn.flexRow }}>
          <IconButton href={githubLink}>
            <GitHubIcon
              fontSize="large"
              color="secondary"
              sx={(mui) => styles.icon(mui)}
            />
          </IconButton>
          <IconButton href={hostedLink}>
            <MoveUpIcon
              fontSize="large"
              color="secondary"
              sx={(mui) => styles.icon(mui)}
            />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
const styles = {
  descrip: { display: "grid", p: 3 },
  container: { display: "grid", gridTemplateColumns: "4fr 5fr", mb: 4 },
  imgContainer: { width: "100%", "&:hover": { "*": { cursor: "pointer" } } },
  img: { width: "100%", height: "100%", objectFit: "cover" },
  projectName: (mui) => ({
    display: "block",
    lineHeight: "normal",
    mb: 1,
    "&:hover": { cursor: "pointer", color: mui.palette.primary.main },
  }),
  projectDescrip: { maxWidth: "525px", mb: 1.5, fontSize: "1rem" },
  languageContainer: {
    maxWidth: "450px",
    display: "flex",
    maxWidth: "500px",
    flexWrap: "wrap",
  },
  languageSpan: { mx: 1.75, width: "100px" },
  icon: { mx: 2, mt: 2 },
  icon: (mui) => ({
    mx: 2,
    mt: 2,
    "&:hover": { "*": { color: mui.palette.primary.main } },
  }),
};
