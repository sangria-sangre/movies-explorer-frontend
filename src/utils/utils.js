export const filterMovies = (moviesList, movieDesired, statusCheckbox, savedMovies) => {
  movieDesired = movieDesired.toLowerCase();

  let moviesDefault = moviesList.filter((movie) => {
    const movieRU = movie.nameRU.toLowerCase();
    const movieEN = movie.nameEN.toLowerCase();
    if (movieRU.indexOf(movieDesired) > -1) {
      return movie;
    } else if (movieEN.indexOf(movieDesired) > -1) {
      return movie;
    }
  });

  if(savedMovies) {
  moviesDefault.forEach(movie => {
    let status = savedMovies.some((m) => {
      if (String(movie.id) === String(m.movieId)) {
        return m;
      }
    })
    movie.like = status;
  });
  }

  if (statusCheckbox) {
    return moviesDefault.filter((movie) => {
      return movie.duration < 40;
    })
  } else {
    return moviesDefault.filter((movie) => {
      return movie.duration > 40;
    })
  }
}
