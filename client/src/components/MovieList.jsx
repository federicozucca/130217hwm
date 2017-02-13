var React = require('react')
var Movie = require('./Movie.jsx')

var MovieList = React.createClass({
  render: function () {

    var movieNodes = this.props.data.map(function (movie) {
      return ( 
          <Movie title={ movie.title } key={movie.id}>
          </Movie>
        )
    })

    return (
      <div className="movie-list">
        <p>UK Opening This Week</p>
          { movieNodes}
      </div>
      )
  },
  propTypes: {
    data: React.PropTypes.array.isRequired,
  }
});


module.exports = MovieList;