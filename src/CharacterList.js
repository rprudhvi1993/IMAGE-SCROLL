import React from "react";
import styled from 'styled-components'
import useCharacters from "./useCharacters";
import { Link } from "react-router-dom";




const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;


export default function CharacterList() {
  
  const { error, loading, data }  = useCharacters();

  if(loading){
    return (<div>Spinner</div>)
  }

  if(error) return <div>Something went wrong</div>
  return (
    <div className="App">
      <h1>API Driven Images</h1>
      <Container>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
              <img src={character.image} />
              <h2>{character.name}</h2>
          </Link>
        )
      })}
      </Container>
    </div>
  );
}

