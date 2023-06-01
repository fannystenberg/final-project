import React, { useState } from 'react';
import { TextField, Paper, Grid, IconButton } from '@mui/material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

export const NewLocation = () => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ location: inputValue })
    }
    fetch('https://final-project-es4c3pthxq-no.a.run.app/locations/', options)
      .then((res) => res.json())
      .then((data) => { console.log(data.response) })
      .finally(() => setInputValue(''))
  };
  return (
    <Paper sx={{ maxHeight: 200, width: '100%', margin: '10px', padding: '20px 0' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid xs={10} md={11} item>
          <TextField
            sx={{ margin: '10px' }}
            id="standard-basic"
            variant="standard"
            color="secondary"
            fullWidth
            label="Add new location"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue} />
        </Grid>
        <Grid xs={2} md={1} item>
          <IconButton
            onClick={onSubmit}
            disabled={inputValue.length < 1}
            type="submit">
            <AddLocationAltOutlinedIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
};