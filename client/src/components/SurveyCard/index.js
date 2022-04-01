import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShareableBtn from "../ShareableBtn";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="Images/pixel-pic.jpeg"
          alt="My First Survey"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DYNAMIC SURVEY NAME
          </Typography>
          <Typography variant="body2" color="text.secondary">
            DYNAMIC SURVEY DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ShareableBtn />
      </CardActions>
    </Card>
  );
}