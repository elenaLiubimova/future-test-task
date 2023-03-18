import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CardItem = ({ img, category, name, author }) => {
  
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={img} title={name} />
      <CardContent>
        <Typography gutterBottom variant="body2" component="p">
          {category}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
