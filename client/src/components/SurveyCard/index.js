import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShareableBtn from "../ShareableBtn";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="Images/survey-card.jpeg"
          alt="My First Survey"
        />
        <CardContent>
          <Typography box textAlign='center' gutterBottom variant="h5" component="div" style={{color: '#2F4B8A'}}>
            My First Survey!
          </Typography>
          <Typography box textAlign='center' variant="body2" color="text.secondary" style={{color: '#2F4B8A'}}>
            This survey will pulse check my staff regarding the new protocols.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ShareableBtn justifyContent='center'/>
      </CardActions>
    </Card>
  );
}