import React from 'react';
import { Card, CardContent, CardActions, Typography, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const EditLocation = ({ description }) => {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 200, margin: '10px' }}>
      <CardContent>
        <TextField
          fullWidth
          id="location"
          label="Location"
          name="location"
          autoComplete="location" />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton type="submit">
          <SaveOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <CloseOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}