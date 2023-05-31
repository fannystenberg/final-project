import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const Location = ({ title, description, id }) => {
  const handleDelete = (locationId) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://final-project-es4c3pthxq-no.a.run.app/locations/${locationId}`, options)
      .then((res) => res.json())
      .then((data) => { console.log(data.response) })
  };

  return (
    <Card sx={{ maxWidth: 400, maxHeight: 200, margin: '10px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(id)}>
          <DeleteOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}