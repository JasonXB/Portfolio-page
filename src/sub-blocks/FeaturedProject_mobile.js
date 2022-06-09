import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { mxn } from "../../styles/mixins";
import Link from "@mui/material/Link";
//=
export default function FeaturedProject_mobile({ dataObj }) {
  const { level, projectName, description, tools, githubLink, hostedLink, img } = dataObj; // prettier-ignore

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent sx={{background:"rgba(2,12,27,0.82)"}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {projectName}
        </Typography>
        <Typography variant="body2" color="secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link
          href={hostedLink}
          underline="none"
          color="secondary"
          sx={{ mx: "1rem" }}
        >
          Site
        </Link>
        <Link
          href={githubLink}
          underline="none"
          color="secondary"
          sx={{ mx: "1rem" }}
        >
          Source code
        </Link>
      </CardActions>
    </Card>
  );
}
