// import './App.css'

import LocalStoragePanel from "./components/LocalStoragePanel";
import ReducerPanel from "./components/ReducerPanel";
import ReducerPanelState from "./components/ReducerPanelState";
import StateEffectPanel from "./components/StateEffectPanel";
import styled from "styled-components";

const StyledSection = styled.section`
  margintop: 2rem;
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

        <StyledSection>
          <h2>2. Reducer vs State Panel</h2>
          <p>State version</p>
          <ReducerPanelState />
        </StyledSection>
        <StyledSection>
          <h2>2. Reducer vs State Panel</h2>
          <p>Reducer version</p>
          <ReducerPanel />
        </StyledSection>
        <StyledSection>
          <h2>3. Local Storage Hook Panel</h2>
          <LocalStoragePanel />
        </StyledSection>
      </div>
    </>
  );
}

export default App;
