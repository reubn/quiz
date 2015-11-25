const React = require("react")
const ReactCSSTransitionGroup = require("react-addons-css-transition-group");
const styles = require("Display.css")

module.exports = React.createClass({
  displayName: "Display",
  render: function(){
    console.log(this.props)
    return (
        <ReactCSSTransitionGroup className={styles()}
                                 transitionName={{
                                   enter: styles("reactAnimation-enter"),
                                   enterActive: styles("reactAnimation-enter-active"),
                                   leave: styles("reactAnimation-leave"),
                                   leaveActive: styles("reactAnimation-leave-active"),
                                   appear: styles("reactAnimation-appear"),
                                   appearActive: styles("reactAnimation-appear-active")
                                 }}
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={300}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname, test: "YEAH"})}
          </ReactCSSTransitionGroup>
    )
  }
})
