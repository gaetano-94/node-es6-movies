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
