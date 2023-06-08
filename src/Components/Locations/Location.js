import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { PlaceOutlined, LabelOutlined, EditOutlined, DeleteOutlined } from '@mui/icons-material';

export const Location = ({ title, location, label, setEdit, id }) => {
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

  const handleEdit = (locationId) => {
    setEdit({ id: locationId, status: true })
  };

  return (
    <Card sx={{ maxHeight: 200, width: '100%', margin: '10px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" fontSize="20px">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          <PlaceOutlined sx={{ marginBottom: '-5px' }} /> {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LabelOutlined sx={{ marginBottom: '-7px' }} /> {label}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton type="button" onClick={() => handleEdit(id)}>
          <EditOutlined />
        </IconButton>
        <IconButton type="button" onClick={() => handleDelete(id)}>
          <DeleteOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
}