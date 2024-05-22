// Array di oggetti rappresentanti film e serie tv
const media = [
  {
    title: 'Jaws',
    year: 1975,
    genre: 'Drama',
    rating: 8,
    type: 'movie',
  },
  {
    title: 'Breaking Bad',
    year: 2008,
    genre: 'Drama',
    rating: 9.5,
    type: 'tv',
    seasons: 5,
  },
  {
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    type: 'movie',
  },
  {
    title: 'Stranger Things',
    year: 2016,
    genre: 'Horror',
    rating: 8.7,
    type: 'tv',
    seasons: 4,
  },
];

// classe Movie
class Movie {
  #title;
  #year;
  #genre;
  #rating;
  #type;
  constructor(title, year, genre, rating, type) {
    this.#title = title;
    this.#year = year;
    this.#genre = genre;
    this.#rating = rating;
    this.#type = type;
  }
  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
  }
  get year() {
    return this.#year;
  }
  set year(value) {
    this.#year = value;
  }
  get genre() {
    return this.#genre;
  }
  set genre(value) {
    this.#genre = value;
  }
  get rating() {
    return this.#rating;
  }
  set rating(value) {
    this.#rating = value;
  }
  get type() {
    return this.#type;
  }
  set type(value) {
    this.#type = value;
  }
  toString() {
    return `${this.#title} è un ${this.#type} di genere ${
      this.#genre
    }. E' stato rilasciato nel ${this.#year} ed ha un voto di ${this.#rating}.`;
  }
}

// classe TvSerie che estende Movie
class TvSerie extends Movie {
  #seasons;
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.#seasons = seasons;
  }
  get seasons() {
    return this.#seasons;
  }
  set seasons(value) {
    this.#seasons = value;
  }
  toString() {
    return `${this.title} è una serie tv di genere ${
      this.genre
    }. La prima stagione è stata rilasciata nel ${
      this.year
    } ed in totale sono state prodotte ${
      this.#seasons
    } stagioni. Ha un voto di ${this.rating}.`;
  }
}

// nuovo array con istanze di Movie o TvSerie
const mediaInstances = media.map((item) => {
  if (item.type === 'movie') {
    return new Movie(item.title, item.year, item.genre, item.rating, item.type);
  } else if (item.type === 'tv') {
    return new TvSerie(
      item.title,
      item.year,
      item.genre,
      item.rating,
      item.type,
      item.seasons
    );
  }
});

// console.log(mediaInstances.toString());

// funzione che restituisce la media dei voti per un determinato genere
function averageRatingByGenre(mediaList, genre) {
  const filteredMedia = mediaList.filter((media) => media.genre === genre);
  const totalRating = filteredMedia.reduce(
    (sum, media) => sum + media.rating,
    0
  );
  return filteredMedia.length ? totalRating / filteredMedia.length : 0;
}

// funzione che restituisce la lista dei generi senza ripetizioni
function uniqueGenres(mediaList) {
  const genres = mediaList.map((media) => media.genre);
  return [...new Set(genres)];
}

// funzione che filtra i film per genere e ritorna l'array dei toString
function filterByGenre(mediaList, genre) {
  return mediaList
    .filter((media) => media.genre === genre)
    .map((media) => media.toString());
}

// esecuzione delle varie funzioni e stampa dei risultati nel terminale
console.log(
  'Media dei voti per il genere Drama:',
  averageRatingByGenre(mediaInstances, 'Drama')
);
console.log('Lista dei generi unici:', uniqueGenres(mediaInstances));
console.log(
  'Film di genere Drama:',
  filterByGenre(mediaInstances, 'Drama').join('\n')
);

// classe Cart per salvare i film da noleggiare
class Cart {
  constructor() {
    this.cartItems = [];
  }
  addItem(media) {
    this.cartItems.push(media);
  }
  removeItem(media) {
    const index = this.cartItems.indexOf(media);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
  totalCost() {
    return this.cartItems.length * 3.99;
  }
  printCart() {
    this.cartItems.forEach((item) => console.log(item.toString()));
  }
}
