import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  action: [
    { name: "John Wick Series", rating: "5/5" },
    { name: "James Bond Series", rating: "4.5/5" }
  ],

  comedy: [
    {
      name: "The Mask",
      rating: "5/5"
    },
    {
      name: "Ace Ventura",
      rating: "4.5/5"
    }
  ],
  thriller: [
    {
      name: "Coherence",
      rating: "5/5"
    },
    {
      name: "TENET",
      rating: "4.3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        🎥 good<span>movies</span>
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div className="btn-div">
        {Object.keys(moviesDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {moviesDB[selectedGenre].map((movie) => (
            <li key={movie.name}>
              {" "}
              <div className="movie-name"> {movie.name} </div>
              <div className="movie-rating"> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
