var React = require('react')

var MovieList = require('./MovieList.jsx')

var movies = [
{id: 1, title: 'The Patriot'},
{id: 2, title: 'Braveheart'},
{id: 3, title: 'The Gladiator'},
{id: 4, title: 'Taken'},
{id: 5, title: 'The smurfs'},
{id: 6, title: 'The Italian Job'},
]

var MovieBox = React.createClass({
  getInitialState: function (){
    return {data: movies};
  },
  render: function () {
    return (
      <div className="movie-box">
        <MovieList data={ this.state.data }/>   
      <button>Get Showtimes >></button>
</div>
      )
  }
});


module.exports = MovieBox;