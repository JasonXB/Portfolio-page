import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { mxn } from "../../styles/mixins";
import Link from "@mui/material/Link";

//=
export default function FeaturedProject_mobile({ dataObj, mb }) {
  const { projectName, description, tools, githubLink, hostedLink, img } = dataObj; // prettier-ignore

  const [used, setUsed] = React.useState("");

  React.useEffect(() => {
    let str = "";
    tools.forEach((lang, i) => {
      if (i === 0) str = lang;
      else str += `, ${lang}`;
    });
    setUsed(str);
  }, [tools]);

  return (
    <Card
      sx={(mui) => ({
        background: mui.palette.cardBg.main,
        border: `2px solid ${mui.palette.secondary.main}`,
        mb: mb, // changes at 800px 
        ...styles.card,
      })}
    >
      <CardMedia
        component="img"
        height="140"
        image={img}
        sx={{ borderBottom: "2px solid #8892b0" }}
      />
      <CardContent sx={(mui) => ({ background: mui.palette.cardBg.main })}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={(mui) => styles.projectName(mui)}
        >
          {projectName}
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          sx={{ textAlign: "center" }}
        >
          {description}
        </Typography>
      </CardContent>

      <Typography
        variant="body2"
        color="secondary"
        sx={(mui) => styles.tools(mui)}
      >
        Built with {used}
      </Typography>

      <CardActions sx={(mui) => styles.cardActions(mui)}>
        <Link
          href={hostedLink}
          underline="none"
          color="primary"
          sx={{ mx: "1rem" }}
        >
          Site
        </Link>
        <Link
          href={githubLink}
          underline="none"
          color="primary"
          sx={{ mx: "1rem" }}
        >
          Source code
        </Link>
      </CardActions>
    </Card>
  );
}

const styles = {
  projectName: (mui) => ({
    textAlign: "center",
    color: mui.palette.header.main,
  }),
  tools: (mui) => ({
    textAlign: "center",
    background: mui.palette.cardBg.main,
    px: 2,
    pb: 2,
  }),
  cardActions: (mui) => ({
    background: mui.palette.cardBg.main,
    display: "flex",
    justifyContent: "center",
    p: 2,
    pt: 0,
  }),
  card: {
    maxWidth: 400,
    mx: "auto",
    ["@media (min-width: 800px)"]: { mb: 0 },
  },
};
