import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="empty-message">No movies match yet. Add one above!</p>;
  }

  return (
    <section className="movie-list" aria-label="Movies">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;