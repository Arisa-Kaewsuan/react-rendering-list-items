import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section font-kanit">
        <h1 className="flex justify-center font-bold text-4xl mt-10">
          Movie List Section
        </h1>
        {/* Render Movie Lists Here */}
         {movies.map((movie) => (
          // Big Box
          <div className="flex justify-center">
            <div key={movie.title} className="p-3 w-[400px] h-auto flex gap-5 m-5 rounded-[10px] bg-white shadow-2xl">

              {/* Movie Image Box */}
              <div className="h-[100px] w-[100px] flex-shrink-0">
                <img 
                  src={movie.image}
                  className="h-full w-full object-cover rounded-[10px] overflow-hidden"
                  ></img>

              {/* Movie Detail Box */}
              </div>
              <div className="flex flex-col text-[20px] gap-2 text-black">
                <p>Title: {movie.title}</p>
                <p>Year: {movie.year}</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Genres:
                    {movie.genres.map((genre) => (
                    <span 
                      key={genre} 
                      className="m-1 py-1 px-2 bg-[#EAAC99] rounded-[10px] text-[16px] inline-block"
                      >{genre}</span>
                    ))}
                </p>
                <p>IMDB Ratings: {movie.imdbRating}</p>
                <p>IMDB Votes: {movie.imdbVotes}</p>
              </div>
            </div>
          </div>
         ))}
      </section>
    </div>
  );
}

export default App;
