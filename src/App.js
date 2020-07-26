import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";
const Boton = styled.button`
  background: --webkit-linear-gradient(
    top left,
    #006d35 0%,
    #0f574e 40%,
    #007d35 100%
  );
  font-family:Arial, Helvetica, sans-serif;
  background-size: 300px;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition:all .8s ease;
  :hover{
    cursor:pointer;
    border-radius:.5rem;
    background-size:400;
  }
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [frase, setFrase] = useState({});
  useEffect(() => {
    consultaApi();
  }, []);
  const consultaApi = async () => {
    //Fetch
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setFrase(frase[0]);
  };
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={() => consultaApi()}>Frase</Boton>
    </Contenedor>
  );
}

export default App;
