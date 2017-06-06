var React = require('react');
// var createClass = require ('create-react-class');
var NavBar = require ('NavBar');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <NavBar/>
//           <h2>main Component</h2>
//           {this.props.children}
//       </div>
//
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <NavBar/>
        <h2>main Component</h2>
        {props.children}
    </div>

  );
}

module.exports = Main;
