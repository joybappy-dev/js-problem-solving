const movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "Drama",
    },
    {
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: "Crime",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action",
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: "Crime",
    },
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
    },
    {
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        genre: "Drama",
    },
    {
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: "Drama",
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi",
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genre: "Sci-Fi",
    },
    {
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        genre: "Thriller",
    },
];
// console.log(movies)

const topRatedSci_FiMovies = movies
    .filter((m) => m.genre === "Sci-Fi")
    .sort((a, b) => b.rating - a.rating)
    .map((m) => `${m.title} (${m.rating})`);
for (m of topRatedSci_FiMovies) {
    console.log(m);
}
