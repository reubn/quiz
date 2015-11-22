require("../css");
require("../fonts");

const React = require("react");
const ReactDOM = require("react-dom");

const Router = require("react-router").Router
const Route = require("react-router").Route
const IndexRoute = require("react-router").IndexRoute

const Display = require("Display")
const SubjectView = require("SubjectView")

const Freezer = require("freezer-js")
const FreezerWrapper = require("FreezerWrapper")


module.exports = function(config){
  this.config = config

  this.freezer = new Freezer({hello: "bye"})

  ReactDOM.render(<FreezerWrapper freezer={this.freezer}>
  <Router>
    <Route path="/" component={Display}>
      <IndexRoute component={SubjectView} freezer={this.freezer}/>
      <Route path="subjects" component={SubjectView} freezer={this.freezer}/>
    </Route>
  </Router>
</FreezerWrapper>, document.body)
}
