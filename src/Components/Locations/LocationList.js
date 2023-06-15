/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, MenuItem, IconButton, CircularProgress } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Location } from './Location';
import { EditLocation } from './EditLocation';
import { Labels } from './NewLocation';

export const LocationList = () => {
  const [loading, setLoading] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState('');
  const [listType, setListType] = useState(false);
  const [edit, setEdit] = useState({ id: null, status: false })
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
    if (locationList === []) {
      setLoading(true);
    }
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    };
    fetch('https://final-project-es4c3pthxq-no.a.run.app/locations', options)
      .then((res) => res.json())
      .then((data) => {
        setLocationList(data.response);
      })
      .finally(() => setLoading(false))
  }, [accessToken, navigate, locationList]);

  const handleFilter = () => {
    const newArray = locationList.filter((list) => {
      return list.tag === filter;
    });
    setFilteredList(newArray);
    setListType(true);
  }

  let List = locationList;
  if (listType) {
    List = filteredList;
  }

  return (
    <>
      {!edit.status &&
      <Paper sx={{ width: '100%' }}>
        <TextField
          sx={{ width: '90%', margin: '10px' }}
          select
          id="tag"
          variant="standard"
          label="Show only.."
          onChange={(e) => setFilter(e.target.value)}
          value={filter}>
          {Labels.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          <MenuItem onClick={() => setListType(false)}>Show All</MenuItem>
        </TextField>
        <IconButton type="button" sx={{ marginTop: '10px' }} onClick={() => handleFilter()}>
          <SearchOutlinedIcon fontSize="large" />
        </IconButton>
      </Paper>}
      {loading && <CircularProgress style={{ width: '60px', margin: '40px' }} />}
      {List.map((location) => {
        return (
          <>
            {!edit.status && <Location
              key={location._id}
              title={location.title}
              location={location.location}
              label={location.tag}
              id={location._id}
              setEdit={setEdit} />}
            {edit.status && location._id === edit.id ? (<EditLocation
              key={location._id}
              title={location.title}
              location={location.location}
              tag={location.tag}
              id={location._id}
              setEdit={setEdit} />) : null}
          </>
        )
      })}
    </>
  )
};