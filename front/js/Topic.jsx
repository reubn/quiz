const React = require("react");

const Link = require("Link")

const pathTools = require("pathTools")

module.exports = React.createClass({
  displayName: "Topic",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  render: function(){
    const subject = this.freezer.get().subjects.find(s => s.name === this.props.params.subjectName)
    const topic = subject.topics.find(t => t.name === this.props.params.topicName)
    return (
      <section>
        <Link to={pathTools.traverse(this.props.location.pathname, 2)}>Back</Link>
        {topic.name}
      </section>
    )
  }
})
