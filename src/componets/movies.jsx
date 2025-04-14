import { Movie } from "./movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
    <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
            <h4>Not found</h4>
        )}
        {/* {movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
        ))} */}
    </div>
    );
}

export { Movies};