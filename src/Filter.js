function Filter({ title, setTitle, minRating, setMinRating }) {
  return (
    <section className="filters" aria-label="Filter movies">
      <label>
        Search by title
        <input
          type="search"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="e.g. Dune"
        />
      </label>

      <label>
        Minimum rating
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={minRating}
          onChange={event => setMinRating(event.target.value)}
          placeholder="Any rating"
        />
      </label>
    </section>
  );
}

export default Filter;