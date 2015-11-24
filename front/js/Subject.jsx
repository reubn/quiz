const React = require("react")

const styles = require("Subject.css")

const Link = require("Link")

const TopicPreview = require("TopicPreview")

module.exports = React.createClass({
  displayName: "Subject",
  componentWillMount: function(){
    this.freezer = this.props.route.freezer
  },
  componentDidMount(){
    window.addEventListener("mousewheel", this.scroll)
  },
  componentWillUnmount(){
    window.removeEventListener("mousewheel", this.scroll)
  },
  scroll: function(e){
    this.refs.topics.scrollLeft += e.deltaY;
  },
  render: function(){
    const subject = this.freezer.get().subjects.find(s => s.name === this.props.params.subjectName)
    return (
      <section style={{background: subject.colour}}>
        <Link to="/subjects" className={styles("back")}>Back</Link>
        <section className={styles("info")}>
          <span className={styles("title")}>{subject.name}</span>
        </section>
        <section className={styles("topics")} ref="topics">{subject.topics.map((topic, key) => <TopicPreview topic={topic} key={key} subject={subject} parent={this}/>)}</section>
      </section>
    )
  }
})
