const React = require("react");

const Link = require("react-router").Link

const pathTools = require("pathTools")

module.exports = React.createClass({
  displayName: "TopicPreview",
  render: function(){
    return (
      <Link to={pathTools.descend("/", this.props.parent.props.location.pathname, "/topic/", this.props.topic.name)}>
        <div>{this.props.topic.name}</div>
      </Link>
    )
  }
})
