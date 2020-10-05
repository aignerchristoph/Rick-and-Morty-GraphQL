import React from "react";

export function Character({ character }) {
  return (
    <div>
      <img src={character.image} alt="" />
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
}
