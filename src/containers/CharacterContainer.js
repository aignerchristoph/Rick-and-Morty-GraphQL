import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Character } from "../components/Character";
import { GET_CHARACTERS } from "../graphql/get-character.js";

const CharacterContainer = (count) => {
  const { loading, data: { characters: { results } = [] } = {} } = useQuery(
    GET_CHARACTERS,
    {
      variables: { page: count.count },
    }
  );

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        results.map((character) => (
          <Character key={character.id} character={character} />
        ))
      )}
    </div>
  );
};

export default CharacterContainer;
