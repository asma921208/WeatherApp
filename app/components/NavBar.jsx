var React = require ('react');
var {Link, IndexLink} = require ('react-router');
// var createClass = require ('create-react-class');

// var NavBar = React.createClass({
//   render: function () {
//     return (
//       <div>
//           <h2>NavBar Component</h2>
//           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br/>
//           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br/>
//           <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link><br/>
//
//       </div>
//
//     );
//   }
// });

var NavBar = (props) => {
  return (
    <div>
        <h2>NavBar Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br/>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br/>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link><br/>

    </div>

  );
}

module.exports = NavBar;
