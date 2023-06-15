import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Checkbox, Box } from '@mui/material';
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
    <Card sx={{ maxHeight: 200, width: '100%', margin: '10px 0' }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 0 2px -6px' }}>
          <Checkbox size="small" />
          <Typography variant="h5" fontSize="20px">
            {title}
          </Typography>
        </Box>
        <Typography gutterBottom variant="body2" color="text.secondary" sx={{ display: 'flex' }}>
          <PlaceOutlined sx={{ marginRight: '6px' }} /> {location}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex' }}>
          <LabelOutlined sx={{ marginRight: '6px' }} /> {label}
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