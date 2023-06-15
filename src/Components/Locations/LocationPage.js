import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HamburgerMenu } from 'Components/HamburgerMenu';
import { LocationList } from './LocationList';
import { NewLocation } from './NewLocation';

export const LocationPage = () => {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <Wrapper>
      <HamburgerMenu setVisible={setToggleForm} />
      {toggleForm && <NewLocation setVisible={setToggleForm} />}
      {!toggleForm && <LocationList />}
    </Wrapper>
  )
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 95vw;
  padding: 10px;
  margin: 0;
  max-width: 300px;

  @media (min-width: 667px) {
      max-width: 100vw;
    }
`;