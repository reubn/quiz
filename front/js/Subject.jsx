const React = require("react");

const Link = require("react-router").Link

const TopicPreview = require("TopicPreview")

module.exports = React.createClass({
  displayName: "Subject",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  render: function(){
    const subject = this.freezer.get().subjects.find(s => s.name === this.props.params.subjectName)
    return (
      <section>
        <Link to="/subjects">Back</Link>
        {subject.topics.map((topic, key) => <TopicPreview topic={topic} key={key} subject={subject} parent={this}/>)}
      </section>
    )
  }
})
