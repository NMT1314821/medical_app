import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import cough from '../assets/cough.jpeg'

export default function CardComponent({ img, problem, price }) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {problem}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Consult now </Button>
      </CardActions>
    </Card>
  );
}
