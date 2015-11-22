const React = require("react");

module.exports = React.createClass({
  displayName: "Subject",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  render: function(){
    const subject = this.freezer.get().subjects.find(s => s.name === this.props.params.name)
    console.log(subject)
    return (
      <section>{JSON.stringify(subject)}</section>
    )
  }
})
