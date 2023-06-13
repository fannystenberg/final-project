import React, { useState } from 'react';
import { Switch, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { Form } from './Form';

export const WelcomePage = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = (event) => {
    setChecked(event.target.checked)
  };

  return (
    <Wrapper>
      <LottieWrapper>
        <Player
          style={{ height: '200px' }}
          src="https://assets7.lottiefiles.com/packages/lf20_jif9vljs.json"
          loop
          autoplay
          speed={1.0} />
        <TextWrapper>
          <Typography variant="body1" fontSize="18px" fontWeight="600">
            Save your favorite locations all in one place
          </Typography>
          <Typography variant="body1" fontSize="16px">
            Sign in or create an account to get started!
          </Typography>
        </TextWrapper>
      </LottieWrapper>
      <FormWrapper>
        {!checked ? <Form path="signin" title="Sign in" btnText="Sign in" /> : <Form path="signup" title="Create account" btnText="Sign up" />}
        <ToggleWrapper>
          <Typography variant="body1" fontSize="16px">
            Sign in
          </Typography>
          <Switch checked={checked} onChange={handleToggle} />
          <Typography variant="body1" fontSize="16px">
            Create account
          </Typography>
        </ToggleWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 667px) {
      display: grid;
      grid-template-columns: 50% 50%;
    }
`;

export const LottieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 20vh;
    margin: 40px 10px 20px 10px;

    @media (min-width: 667px) {
      max-height: 100vh;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 5px 0;
`;

export const ToggleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;