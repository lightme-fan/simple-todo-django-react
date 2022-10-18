import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Home } from './pages';

const Wrapper = styled.div`
  max-width: 578px;
  margin: 60px auto;
  padding: 16px;
`

const App = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

export default App;
