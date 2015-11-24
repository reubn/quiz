const React = require("react");

const styles = require("TopicPreview.css")

const Link = require("Link")

const pathTools = require("pathTools")

module.exports = React.createClass({
  displayName: "TopicPreview",
  render: function(){
    return (
      <Link to={pathTools.descend("/", this.props.parent.props.location.pathname, "/topic/", this.props.topic.name)} className={styles()}>
        {this.props.topic.name}
      </Link>
    )
  }
})
