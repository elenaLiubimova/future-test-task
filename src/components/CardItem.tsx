import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type CardItemProps = {
  img: string; 
  category: string; 
  name: string; 
  author: string; 
  id: string;
};

const CardItem: React.FC<CardItemProps> = ({ img, category, name, author, id }) => {
  const navigate = useNavigate();
  
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: '16px',
        width: '100%',
        boxShadow: 'none',
        backgroundColor: '#e8f4f7',
        cursor: 'pointer',
        transition: 'box-shadow .2s ease-in-out,transform .2s ease-in-out',

        ':hover': {
          boxShadow: '0px 14px 30px rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-5px)',
        },
      }}
      onClick={() => navigate(`/books/${id}`)}
    >
      <CardMedia
        component="img"
        alt="book cover"
        sx={{
          width: 200,
          height: 250,
          alignSelf: 'center',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="p" sx={{
          minHeight: '20px',
        }}>
          {category || ''}
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
