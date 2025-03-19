import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section>
        {/* Render Movie Lists Here */}
        <h2 className="font-medium text-lg text-center">Movie List Section</h2>

        <div>
          <ul className="rounded-lg p-4  bg-gray-200 m-4">
            {movies.map((movie) => (
              <li key={movie.title} className="p-4 bg-white rounded shadow-lg flex mb-20">
                <img src={movie.image} alt={movie.title} className="w-[102px] h-[100px] rounded-md object-cover mr-4"/>
                <div>
                  <p>Title: {movie.title}</p>
                  <p>Year: {movie.year}</p>
                  <p>Runtime: {movie.runtime}</p>
                  <p>Genres: {movie.genres}</p>
                  <p>IMDB Ratings: {movie.imdbRating}</p>
                  <p>IMDB Votes: {movie.imdbVotes}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
