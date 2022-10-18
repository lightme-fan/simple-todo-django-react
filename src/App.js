import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Header } from './components';
import { Home, Login, Signup } from './pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Container = styled.div`
  max-width: 1425px;
  margin: auto;
  padding: 16px;
`

const Wrapper = styled.div`
  max-width: 578px;
  margin: 60px auto;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Wrapper>
      </Container>
    </Router>
  );
}

export default App;
