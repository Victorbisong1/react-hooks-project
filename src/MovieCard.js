function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.posterURL} alt={`${movie.title} poster`} />

      <div className="movie-info">
        <div className="movie-title-row">
          <h2>{movie.title}</h2>
          <span className="rating">★ {movie.rating}/10</span>
        </div>

        <p>{movie.description}</p>
      </div>
    </article>
  );
}

export default MovieCard;