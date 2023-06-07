import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Paper, Grid, IconButton } from '@mui/material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const labels = ['Restaurant', 'Viewpoint', 'Hotel', 'City', 'Other'];

export const NewLocation = () => {
  const [titleValue, setTitleValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const showForm = () => { setVisible(true) };
  const hideForm = () => {
    setVisible(false);
    setTitleValue('');
    setLocationValue('');
    setLabel('');
  };

  const handleSubmit = () => {
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
    <>
      <Paper>
        <IconButton
          onClick={showForm}
          type="button">
          <Typography>Add location</Typography>
          <AddLocationAltOutlinedIcon fontSize="large" />
        </IconButton>
      </Paper>
      {visible && (
        <Paper sx={{ maxHeight: 300, width: '100%', margin: '10px', padding: '20px 0' }}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container alignItems="center" spacing={2}>
              <Grid xs={10} md={11} item>
                <TextField
                  sx={{ margin: '10px' }}
                  id="title"
                  variant="standard"
                  fullWidth
                  label="Add new title"
                  onChange={(e) => setTitleValue(e.target.value)}
                  value={titleValue} />
                <TextField
                  sx={{ margin: '10px' }}
                  id="location"
                  variant="standard"
                  fullWidth
                  label="Add new location"
                  onChange={(e) => setLocationValue(e.target.value)}
                  value={locationValue} />
                <TextField
                  select
                  sx={{ margin: '10px' }}
                  id="tag"
                  variant="standard"
                  fullWidth
                  label="Choose label"
                  onChange={(e) => setLabel(e.target.value)}
                  value={label}>
                  {labels.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={10} item>
                <IconButton
                  disabled={locationValue.length < 1}
                  type="submit">
                  <AddLocationAltOutlinedIcon />
                </IconButton>
                <IconButton
                  onClick={hideForm}
                  type="button">
                  <CloseOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      )}
    </>
  )
};