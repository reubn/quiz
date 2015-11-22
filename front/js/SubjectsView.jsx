const React = require("react");

const SubjectPreview = require("SubjectPreview")

module.exports = React.createClass({
  displayName: "SubjectsView",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  render: function(){
    return (
      <section>
        {this.freezer.get().subjects.map((subject, key) => {return <SubjectPreview subject={subject} key={key}/>})}
      </section>
    )
  }
})
