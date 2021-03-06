var movies = [
  {
    id: 1,
    title: 'Requiem for a Dream',
    desc:
      'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
  },
  {
    id: 2,
    title: 'Se7en',
    desc:
      'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg',
  },
  {
    id: 3,
    title: 'Manchester by the Sea',
    desc:
      "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  },
  {
    id: 4,
    title: 'Dług',
    desc:
      'The Debt is a gripping thriller about two entrepreneurs who become tangled in the web of a Russian thug. Two friends begin a business venture of importing Italian scooters into Poland.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BNTZjMjg1NDUtOWY5Ny00YTA2LWE0MjUtNWFhM2ZhMjkxOTc0XkEyXkFqcGdeQXVyMjMwOTA0Ng@@._V1_.jpg',
  },
  {
    id: 5,
    title: 'Reservoir Dogs',
    desc:
      'After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
  },
];

var Image = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },
  render() {
    return React.DOM.img({
      src: this.props.src,
      width: 200,
      height: 300,
    });
  },
});

var Poster = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render() {
    return React.createElement(
      'li',
      null,
      React.DOM.h2(null, this.props.title),
      React.DOM.p(null, this.props.desc),
      React.createElement(Image, { src: this.props.image })
    );
  },
});

var MovieElements = React.createClass({
  render: function() {
    console.log('MovieElements - prop_movies', this.props.prop_movies);
    return React.createElement(
      'ul',
      null,
      this.props.prop_movies.map(function(movie) {
        return React.createElement(Poster, {
          key: movie.id,
          title: movie.title,
          desc: movie.desc,
          image: movie.poster,
        });
      })
    );
  },
});

var element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Movies list'),
  React.createElement(MovieElements, { prop_movies: movies })
);

ReactDOM.render(element, document.getElementById('app'));
