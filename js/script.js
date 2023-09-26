'use strict';

let howManyFilms;

function start () {
    howManyFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(howManyFilms == '' || howManyFilms == null || isNaN(howManyFilms)) {
        howManyFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB  = {
    count: howManyFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel () {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function rememberMyFilms () {
    for(let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
              rating = +prompt('На сколько оцените его?', '');
    
        if(lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres (genres) {
    for(let i = 0; i < 3; i++) {
        genres.push(prompt(`Ваш любимый жанр под номером ${i + 1}`));
    }
}

writeYourGenres(personalMovieDB.genres);

function showMyDB (privat) {
    privat === false ? console.log(personalMovieDB) : null;
}

showMyDB(personalMovieDB.privat);