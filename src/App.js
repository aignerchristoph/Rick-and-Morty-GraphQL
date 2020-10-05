import React, { useState, useCallback } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import CharacterContainer from "./containers/CharacterContainer.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setcount] = useState(1);
  console.log(count);
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
  });
  const plus = useCallback(() => setcount((curr) => curr + 1), [setcount]);
  const minus = useCallback(() => setcount((curr) => curr - 1), [setcount]);
  return (
    <ApolloProvider client={client}>
      <main>
        <h1>Rick and Morty and GraphQL</h1>
        <h2>Page: {count} of 34</h2>
        <CharacterContainer count={count} />
        <div className="buttonGroup">
          <button
            className="button"
            disabled={count > 1 ? false : true}
            onClick={minus}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="button"
            disabled={count === 34 ? true : false}
            onClick={plus}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </main>
    </ApolloProvider>
  );
}

export default App;
