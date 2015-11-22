const React = require("react");

const Link = require("react-router").Link

module.exports = React.createClass({
  displayName: "Subject",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  render: function(){
    const subject = this.freezer.get().subjects.find(s => s.name === this.props.params.name)
    console.log(subject)
    return (
      <section>
        <Link to="/subjects">Back</Link>
        {JSON.stringify(subject)}
      </section>
    )
  }
})
