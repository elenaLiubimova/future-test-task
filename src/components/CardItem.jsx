import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CardItem = ({ img, category, name, author }) => {
  return (
    <Card
      sx={{
        boxSizing: 'border-box',
        width: 200,
        height: 400,
        backgroundSize: 'contain',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        sx={{
          width: 200,
          height: 250,
        }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="p">
          {category}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="h2"
          sx={{
            fontWeight: 'bold',
          }}
        >
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
