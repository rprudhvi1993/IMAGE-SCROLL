import React from 'react';
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
query getCharacter($id: ID!) {
  character(id: $id) {
    id
    name,
    gender,
    image,
      id
      episode {
          name
          episode
      }
  
  }
}
`;

export default function useCharacter(id) {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
      variables: {
          id
      }
    });
  
  return {
    error,
    data,
    loading
  };
}
