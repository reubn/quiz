const React = require("react");

const Link = require("react-router").Link

module.exports = React.createClass({
  displayName: "SubjectPreview",
  render: function(){
    return (
      <Link to={"/subject/" + this.props.subject.name}>
        <div>{this.props.subject.name}</div>
      </Link>
    )
  }
})
