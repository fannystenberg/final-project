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
  width: 90%;
  padding: 20px;
  margin: 0 auto;
`;