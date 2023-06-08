import React, { useState } from 'react';
import { TextField, MenuItem, Paper, Grid, IconButton } from '@mui/material';
import { AddLocationAltOutlined, CloseOutlined } from '@mui/icons-material';

export const Labels = ['Restaurant', 'Viewpoint', 'Hotel', 'City', 'Other'];

export const NewLocation = ({ setVisible }) => {
  const [titleValue, setTitleValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [label, setLabel] = useState('');

  const hideForm = () => {
    setVisible(false);
    setTitleValue('');
    setLocationValue('');
    setLabel('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: titleValue, location: locationValue, tag: label })
    }
    fetch('https://final-project-es4c3pthxq-no.a.run.app/locations/', options)
      .then((res) => res.json())
      .then((data) => { console.log(data.response) })
      .finally(() => {
        setTitleValue('');
        setLocationValue('');
        setLabel('');
      })
  };
  return (
    <Paper sx={{ maxHeight: 300, width: '100%', margin: '10px', padding: '20px 0' }}>
      <Grid container alignItems="center" padding="5px" spacing={2}>
        <Grid xs={10} md={11} item>
          <TextField
            sx={{ margin: '5px 15px' }}
            id="title"
            variant="standard"
            fullWidth
            label="Add new title"
            onChange={(e) => setTitleValue(e.target.value)}
            value={titleValue} />
          <TextField
            sx={{ margin: '5px 15px' }}
            id="location"
            variant="standard"
            fullWidth
            label="Add new location"
            onChange={(e) => setLocationValue(e.target.value)}
            value={locationValue} />
          <TextField
            select
            sx={{ margin: '5px 15px' }}
            id="tag"
            variant="standard"
            fullWidth
            label="Choose label"
            onChange={(e) => setLabel(e.target.value)}
            value={label}>
            {Labels.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid xs={10} item>
          <IconButton
            disabled={locationValue.length < 1}
            type="submit"
            onClick={handleSubmit}>
            <AddLocationAltOutlined />
          </IconButton>
          <IconButton
            onClick={hideForm}
            type="button">
            <CloseOutlined />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
};