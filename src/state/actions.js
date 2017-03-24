import movies from './movies'


export function getPopularMovies () {
  // Combine an array of arrays into a single array.
  const combinedResults = [...movies[0], ...movies[1]];
  combinedResults.forEach((el) => {
    const { title } = el;
    // Extract year that is at the end of title inside parenthesis and add it to new releaseYear attribute.
    // Note: I was thinking of extracting year value from releaseDate but it doesn't seem to make sense
    // since let's say for Forrest Gump it would display 1945 but the movie was released in 1994, that's
    // why I decided to extract from title.
    el.releaseYear = parseInt(title.substring((title.length - 5), (title.length - 1)));
  });

  // Sort by year then by title.
  // First compare years. If the years are not equal then sort by year and ignore comparing titles
  // If the years are equal then compare titles to see if one title comes before another alphabetically
  combinedResults.sort((a, b) => a.releaseYear - b.releaseYear  ||  a.title.localeCompare(b.title));

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}


