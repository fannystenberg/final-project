import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const EditLocation = ({ title, location, id, setEdit }) => {
  const [titleValue, setTitleValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const onSubmit = (locationId) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: titleValue, location: locationValue })
    }
    fetch(`https://final-project-es4c3pthxq-no.a.run.app/locations/${locationId}/edit`, options)
      .then((res) => res.json())
      .then((data) => { console.log(data.response) })
      .finally(() => setEdit(false))
  };

  const handleEdit = (locationId) => {
    setEdit({ id: locationId, status: false })
  };

  return (
    <Card sx={{ maxHeight: 300, width: '100%', margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" color="red" margin="10px 0">
          {title}
        </Typography>
        <TextField
          fullWidth
          label="Title"
          placeholder="Type new title here"
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue} />
        <Typography variant="body2" color="red" margin="10px 0">
          {location}
        </Typography>
        <TextField
          fullWidth
          label="Location"
          placeholder="Type new location here"
          onChange={(e) => setLocationValue(e.target.value)}
          value={locationValue} />
      </CardContent>
      <CardActions>
        <IconButton type="submit" disabled={titleValue.length < 1} onClick={() => onSubmit(id)}>
          <SaveOutlinedIcon />
        </IconButton>
        <IconButton type="button" onClick={() => handleEdit(id)}>
          <CloseOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}