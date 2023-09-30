'use strict';


const personalMovieDB  = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    detectPersonalLevel: function () {
        if(personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    rememberMyFilms: function () {
        for(let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  rating = +prompt('На сколько оцените его?', '').trim();
        
            if(lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rating;
            } else {
                i--;
            }
        }
    },

    writeYourGenres: function (genres) {

        for(let i = 0; i < 3; i++) {

            let getGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);

            if(getGenres === '' || getGenres === null) {
                i--
            }  else {
                genres.push(getGenres);
            }
        }

        genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`)
        })

    },

    showMyDB: function (privat) {
        privat === false ? console.log(personalMovieDB) : null;
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.privat  = !personalMovieDB.privat
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres(personalMovieDB.genres);