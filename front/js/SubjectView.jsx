const React = require("react");

module.exports = React.createClass({
  displayName: "SubjectView",
  render: function(){
    return (
      <div onClick={function(){this.props.route.freezer.set({hello: "Hi"})}.bind(this)}>
        {JSON.stringify(this.props.route.freezer.get())}
      </div>
    )
  }
})
