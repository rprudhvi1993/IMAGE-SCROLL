import React from 'react';
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
query getCharacter {
  characters {
    results{
    name,
    image,
      id
  }
  }
}
`;

export default function useCharacters() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return {
    error,
    data,
    loading
  };
}
