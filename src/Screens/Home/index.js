import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../../components/Movie";
import "./Home.css";

import Layout from "../../components/Layout";
import FetchBox from "../../components/FetchBox";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);

  const getMovies = async () => {
    setLoading(true);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${page}`
    );
    // this.setState({ movies, isLoading: false });
    setMovies((m) => [...m, ...movies]);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <Layout>
      {!movies.length && loading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <>
          <div className="movies">
            {movies.map((movie, idx) => (
              <Movie
                key={idx}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
          <FetchBox loading={loading} setPage={setPage} />
        </>
      )}
    </Layout>
  );
};

// class Home extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//     page: 0,
//   };

//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
//     );
//     this.setState({ movies, isLoading: false });
//   };

//   componentDidMount() {
//     this.getMovies();
//   }

//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <Layout>
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader_text">Loading...</span>
//           </div>
//         ) : (
//           <>
//             <div className="movies">
//               {movies.map((movie) => (
//                 <Movie
//                   key={movie.id}
//                   id={movie.id}
//                   title={movie.title}
//                   year={movie.year}
//                   summary={movie.summary}
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                 />
//               ))}
//             </div>
//             <FetchBox />
//           </>
//         )}
//       </Layout>
//     );
//   }
// }

export default Home;
