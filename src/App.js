import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  action: [
    { name: "John Wick Series", rating: "5/5" },
    { name: "James Bond Series", rating: "4.5/5" },
    { name: "Mission Impossible Series", rating: "4.5/5" }
  ],
  funny: [
    { name: "The Mask", rating: "5/5" },
    { name: "Ace Ventura", rating: "4.5/5" },
    { name: "Baby's Day Out", rating: "5/5" }
  ],
  thriller: [
    { name: "Coherence", rating: "5/5" },
    { name: "TENET", rating: "4.3/5" }
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
        🎥 good<span>movies</span>
      </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite movies. Select a genre to get started
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
            <li>
              <div className="movie-name"> {movie.name} </div>
              <div className="movie-rating"> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
