import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Header } from './components';
import { Home } from './pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Container = styled.div`
  max-width: 1602px;
  margin: auto;
  padding: 16px;
`

const Wrapper = styled.div`
  max-width: 950px;
  margin: 125px auto 60px auto;
  padding: 90px 16px 26px 16px;
  box-shadow: -1px 0px 19px -3px rgba(0,0,0,0.51) inset;
  -webkit-box-shadow: -1px 0px 19px -3px rgba(0,0,0,0.51) inset;
  -moz-box-shadow: -1px 0px 19px -3px rgba(0,0,0,0.51) inset;
  border-radius: 9px;

  @media (min-width: 700px) {
    padding: 90px;
  } 
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" exact element={<Home itemsPerPage={5} />} />
          </Routes>
          {/* <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes> */}
        </Wrapper>
      </Container>
    </Router>
  );
}

export default App;
