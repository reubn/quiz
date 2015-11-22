const React = require("react");

module.exports = React.createClass({
  displayName: "Display",
  render: function(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
