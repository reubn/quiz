const React = require("react");

const Link = require("react-router").Link

module.exports = React.createClass({
  displayName: "Display",
  render: function(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/subjects">Subjects</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
