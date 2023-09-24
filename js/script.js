'use strict';

const howManyFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB  = {
    count: howManyFilms,
    movies: {},
    actors: {},
    genres: [],
    privatL: false
};

for(let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const rating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastFilm] = rating;
}

console.log(personalMovieDB);