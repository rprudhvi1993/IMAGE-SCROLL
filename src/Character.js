import React from 'react';
import useCharacter from './useCharacter';
import { useParams } from 'react-router';

export default function Character() {
    const {id} = useParams();
    const { loading, error, data } = useCharacter(id);
    if(loading){
        return (<div>Spinner</div>)
      }
    
      if(error) return <div>Something went wrong</div>

  return <div>
      <h2>More details</h2>
  <div style={{display: "flex", justifyContent: "center"}}>
      <img height={400} width={250} src={data.character.image} />
      <div>
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div>
              {data.character.episode.map(episode => (
                  <div>
                      {episode.name} - <b>{episode.episode}</b>
                </div>
              ))}
          </div>
          </div>
  </div>
  </div>;
}
