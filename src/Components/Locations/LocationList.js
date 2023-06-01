/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Location } from './Location';
import { EditLocation } from './EditLocation';

export const LocationList = () => {
  const [locationList, setLocationList] = useState([]);
  const [edit, setEdit] = useState({ id: null, status: false })
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch('https://final-project-es4c3pthxq-no.a.run.app/locations', options)
      .then((res) => res.json())
      .then((data) => { setLocationList(data.response) })
  });

  return (
    <>
      {locationList.map((location) => {
        return (
          <>
            {!edit.status && <Location
              key={location._id}
              title={location.location}
              description={location._id}
              id={location._id}
              setEdit={setEdit} />}
            {edit.status && location._id === edit.id ? (<EditLocation
              key={location._id}
              title={location.location}
              description={location._id}
              id={location._id}
              setEdit={setEdit} />) : null}
          </>
        )
      })}
    </>
  )
};