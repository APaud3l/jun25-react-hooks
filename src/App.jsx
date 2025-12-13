// import './App.css'

import StateEffectPanel from "./components/StateEffectPanel";
import styled from "styled-components";

const StyledSection = styled.section`
  marginTop: 2rem;
  border: 1px solid #04c1889d;
  padding: 1rem;
`;

function App() {

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1>React Hooks Lab Dashboard</h1>
        <p>Playground for useState, useEffect, and others.</p>

        <StyledSection>
          <h2>1. State and Effect Panel</h2>
          {/* We'll drop some component here. */}
          <StateEffectPanel />
        </StyledSection>
      </div>
    </>
  )
}

export default App;
