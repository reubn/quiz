const React = require("react");

const styles = require("SubjectsView.css")

const SubjectPreview = require("SubjectPreview")

module.exports = React.createClass({
  displayName: "SubjectsView",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  render: function(){
    return (
      <section className={styles()}>
        <section className={styles("desc")}></section>
        <section className={styles("subjects")}>{this.freezer.get().subjects.map((subject, key) => <SubjectPreview subject={subject} key={key} i={key} parent={this}/>)}</section>
      </section>
    )
  }
})
