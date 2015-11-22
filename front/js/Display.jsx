const React = require("react")
const styles = require("Display.css")

module.exports = React.createClass({
  displayName: "Display",
  render: function(){
    return (
      <div className={styles()}>
        {this.props.children}
      </div>
    )
  }
})
