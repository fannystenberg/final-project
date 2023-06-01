import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// Edit specific location
// props: { title, description, setEdit, id, editId, editStatus }
// edit button: onClick={() => setEdit({ editId: id, editStatus: true })
// gives error: eslint no-unused-vars for editId and editStatus

export const EditLocation = ({ description, id, setEdit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleEdit = (locationId) => {
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
        <IconButton type="submit" disabled={inputValue.length < 1} onClick={() => handleEdit(id)}>
          <SaveOutlinedIcon />
        </IconButton>
        <IconButton type="button" onClick={() => setEdit(false)}>
          <CloseOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}