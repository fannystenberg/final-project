import React from 'react';
import { styled } from 'styled-components';
import { LocationList } from './LocationList';
import { NewLocation } from './NewLocation';

export const LocationPage = () => {
  return (
    <Wrapper>
      <NewLocation />
      <LocationList />
    </Wrapper>
  )
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 95%;
  padding: 20px;
`