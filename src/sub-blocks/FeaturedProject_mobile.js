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
export default function FeaturedProject_mobile({ dataObj }) {
  const { level, projectName, description, tools, githubLink, hostedLink, img } = dataObj; // prettier-ignore
  const toolsUsed = "";
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
    <Card sx={(mui) => ({ ...styles.border(mui), maxWidth: 345 })}>
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
          color="info"
          sx={(mui) => ({
            textAlign: "center",
            color: mui.palette.header.main,
          })}
        >
          {projectName}
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          sx={(mui) => ({
            textAlign: "center",
            color: mui.palette.secondary.main,
          })}
        >
          {description}
        </Typography>
      </CardContent>

      <Typography
        variant="body2"
        color="secondary"
        sx={(mui) => ({
          textAlign: "center",
          background: mui.palette.cardBg.main,
          px: 2,
          pb: 2,
        })}
      >
        Built with {used}
      </Typography>

      <CardActions
        sx={(mui) => ({
          background: mui.palette.cardBg.main,
          display: "flex",
          justifyContent: "center",
          p:2,
          pt:0
        })}
      >
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
  border: (mui) => ({ border: `2px solid ${mui.palette.secondary.main}` }),
};
