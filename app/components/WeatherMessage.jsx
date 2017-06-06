var React = require ('React');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//       <h3>It is {temp} C in {location}</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {

  return (
    <h3>It is {temp} C in {location}</h3>
  );
}

module.exports = WeatherMessage;
