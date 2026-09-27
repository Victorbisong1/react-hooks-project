import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [minRating, setMinRating] = useState('');

  function addMovie(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const newMovie = {
      id: Date.now(),
      title: data.get('title').trim(),
      description: data.get('description').trim(),
      posterURL: data.get('posterURL').trim(),
      rating: Number(data.get('rating'))
    };

    setMovies(currentMovies => [newMovie, ...currentMovies]);
    form.reset();
  }

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesRating =
      minRating === '' || movie.rating >= Number(minRating);

    return matchesTitle && matchesRating;
  });

  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">YOUR PERSONAL WATCHLIST</p>
        <h1>Movies & shows</h1>
        <p>Add your favorites, then filter by title or rating.</p>
      </header>

      <section className="panel">
        <h2>Add a movie or show</h2>
        <form className="movie-form" onSubmit={addMovie}>
          <label>
            Title
            <input name="title" type="text" required />
          </label>

          <label>
            Description
            <textarea name="description" required />
          </label>

          <label>
            Poster image URL
            <input name="posterURL" type="url" required />
          </label>

          <label>
            Rating (0–10)
            <input name="rating" type="number" min="0" max="10" step="0.1" required />
          </label>

          <button type="submit">Add to list</button>
        </form>
      </section>

      <Filter
        title={titleFilter}
        setTitle={setTitleFilter}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      <MovieList movies={filteredMovies} />
    </main>
  );
}

export default App;