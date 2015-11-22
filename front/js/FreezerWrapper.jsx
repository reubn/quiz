const React = require("react");

module.exports = React.createClass({
  displayName: "FreezerWrapper",
  componentDidMount: function(){
    // Here the magic happens. Everytime that the
    // state is updated the app will re-render.
    // A real data driven app.
    this.props.freezer.on("update", () => this.forceUpdate());
  },
  render: function(){
    const state = this.props.freezer.get();
    const newChildren = React.Children.map(this.props.children, function(child){
      return React.cloneElement(child, {
        freezer: state
      })
    }, this)
    return <div>{newChildren}</div>
  }
})
