import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { styled } from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
// eslint-disable-next-line import/no-cycle
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
          <HeadlineText>Save your favorite locations all in one place</HeadlineText>
          <BodyText>Sign in or create an account to get started</BodyText>
        </TextWrapper>
      </LottieWrapper>
      <FormWrapper>
        {!checked ? <Form path="signin" title="Sign in" btnText="Sign in" /> : <Form path="signup" title="Create account" btnText="Sign up" />}
        <ToggleWrapper>
          <BodyText>Sign in</BodyText>
          <Switch checked={checked} onChange={handleToggle} />
          <BodyText>Create account</BodyText>
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
      gap: 10px;
      margin-top: 15vh;
    }
`;

export const LottieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 20vh;
    margin: 50px 10px 25px 10px;

    @media (min-width: 667px) {
      max-height: 100vh;
      margin: 0;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;

    @media (min-width: 667px) {
      margin: 10px 0;
    }
`;

export const HeadlineText = styled.p`
  font-family: 'Heebo', sans-serif;
  font-size: 16px;
  font-weight: 700;

  @media (min-width: 667px) {
    font-size: 22px;
    }
`;

export const BodyText = styled.p`
  font-family: 'Heebo', sans-serif;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: 667px) {
    font-size: 16px;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ToggleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;