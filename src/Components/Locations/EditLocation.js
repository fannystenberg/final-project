import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardActions, TextField, IconButton, MenuItem } from '@mui/material';
import { SaveOutlined, CloseOutlined } from '@mui/icons-material';
import { Labels } from './NewLocation';

export const EditLocation = ({ title, location, tag, id, setEdit }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [locationValue, setLocationValue] = useState(location);
  const [label, setLabel] = useState(tag);
  const accessToken = useSelector((store) => store.user.accessToken);

  const onSubmit = (locationId) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({ title: titleValue, location: locationValue, tag: label })
    }
    fetch(`https://final-project-es4c3pthxq-no.a.run.app/locations/${locationId}/edit`, options)
      .then((res) => res.json())
      .finally(() => setEdit(false))
  };

  const handleEdit = (locationId) => {
    setEdit({ id: locationId, status: false })
  };

  return (
    <Card sx={{ maxHeight: 400, width: '100%', margin: '10px 0' }}>
      <CardContent>
        <TextField
          sx={{ margin: '10px 0' }}
          fullWidth
          label="Title"
          placeholder="Type new title here"
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue} />
        <TextField
          sx={{ margin: '10px 0' }}
          fullWidth
          label="Location"
          placeholder="Type new location here"
          onChange={(e) => setLocationValue(e.target.value)}
          value={locationValue} />
        <TextField
          sx={{ margin: '10px 0' }}
          select
          id="tag"
          variant="standard"
          fullWidth
          label="Change label"
          onChange={(e) => setLabel(e.target.value)}
          value={label}>
          {Labels.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </CardContent>
      <CardActions>
        <IconButton
          type="submit"
          disabled={titleValue.length < 1 && locationValue.length < 1}
          onClick={() => onSubmit(id)}>
          <SaveOutlined />
        </IconButton>
        <IconButton type="button" onClick={() => handleEdit(id)}>
          <CloseOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
}