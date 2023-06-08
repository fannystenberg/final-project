import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { styled } from 'styled-components';
import { Form } from './Form';

export const WelcomePage = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = (event) => {
    setChecked(event.target.checked)
  };

  return (
    <Wrapper>
      <Image />
      <FormWrapper>
        {!checked ? <Form path="signin" title="Sign in" btnText="Sign in" /> : <Form path="signup" title="Sign up" btnText="Sign up" />}
        <Switch checked={checked} onChange={handleToggle} />
      </FormWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    // background-color: rgb(23, 22, 22);

    @media (min-width: 667px) {
      display: grid;
      grid-template-columns: 50% 50%;
    }
`;

export const Image = styled.div`
    background-image: url('https://images.unsplash.com/photo-1619468129361-605ebea04b44?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU0NzE5NDV8&ixlib=rb-4.0.3&q=85');
    height: 20vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 667px) {
      height: 100vh;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;