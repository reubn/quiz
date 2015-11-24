const React = require("react");

const styles = require("SubjectPreview.css")

const Link = require("Link")

module.exports = React.createClass({
  displayName: "SubjectPreview",
  render: function(){
    return (
      <Link to={"/subject/" + this.props.subject.name} className={styles()} style={{background: this.props.subject.colour}}>
        <style>{`.${styles()}:nth-of-type(${this.props.i + 1}):hover{color:${this.props.subject.colour}}`}</style>
        {this.props.subject.name}
      </Link>
    )
  }
})
