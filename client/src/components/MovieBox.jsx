var React = require('react')

var MovieList = require('./MovieList.jsx')

var movies = [
{id: 1, title: 'The Patriot'},
{id: 2, title: 'Braveheart'}
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