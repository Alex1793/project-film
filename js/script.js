'use strict';

const howManyFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB  = {
    count: howManyFilms,
    movies: {},
    actors: {},
    genres: [],
    privatL: false
};

if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}



for(let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
          rating = +prompt('На сколько оцените его?', '');

    if(lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rating;
    } else {
        i--;
    }

}

console.log(personalMovieDB);


