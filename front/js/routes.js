const React = require("react");

const Router = require("react-router").Router
const Route = require("react-router").Route
const IndexRoute = require("react-router").IndexRoute

const History = require("History")

const Display = require("Display")
const SubjectsView = require("SubjectsView")
const Subject = require("Subject")

module.exports = function(parent){
  return (<Router history={History.createHashHistory({queryKey: false})}>
            <Route path="/" component={Display}>
              <IndexRoute component={SubjectsView} freezer={parent.freezer}/>
              <Route path="subjects" component={SubjectsView} freezer={parent.freezer}/>
              <Route path="subject/:name" component={Subject} freezer={parent.freezer}/>
            </Route>
          </Router>)
}
