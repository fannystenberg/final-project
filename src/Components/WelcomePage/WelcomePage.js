import React from 'react';
import { styled } from 'styled-components';
import { SignUp } from './SingUp';

export const WelcomePage = () => {
  return (
    <Wrapper>
      <SignUp />
    </Wrapper>
  );
};

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
`;