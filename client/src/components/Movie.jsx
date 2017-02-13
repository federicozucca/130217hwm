var React = require('react');
var Movie = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="movie">
        <a href="http://www.imdb.com/">{this.props.title}</a> <a id="second link" href="http://www.imdb.com/">showtimes</a>
      </div>
      );
  }
});

module.exports = Movie;