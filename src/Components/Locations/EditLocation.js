import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const EditLocation = ({ description, id, setEdit }) => {
  const [inputValue, setInputValue] = useState('');
  const onSubmit = (locationId) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ location: inputValue })
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
    <Card sx={{ maxWidth: 400, maxHeight: 200, margin: '10px' }}>
      <CardContent>
        <TextField
          fullWidth
          id="location"
          label="Location"
          name="location"
          autoComplete="location"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue} />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton type="submit" disabled={inputValue.length < 1} onClick={() => onSubmit(id)}>
          <SaveOutlinedIcon />
        </IconButton>
        <IconButton type="button" onClick={() => handleEdit(id)}>
          <CloseOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}