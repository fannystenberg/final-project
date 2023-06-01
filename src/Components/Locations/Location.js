import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const Location = ({ title, description, setEdit, id }) => {
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
        <Typography gutterBottom variant="h5" component="div">
          <PlaceOutlinedIcon /> {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton type="button" onClick={() => handleEdit(id)}>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton type="button" onClick={() => handleDelete(id)}>
          <DeleteOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}