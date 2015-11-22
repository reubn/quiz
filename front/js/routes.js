const React = require("react")

const Router = require("react-router").Router
const Route = require("react-router").Route
const IndexRoute = require("react-router").IndexRoute
const Redirect = require("react-router").Redirect

const History = require("History")

const Display = require("Display")

const SubjectsView = require("SubjectsView")
const Subject = require("Subject")
const Topic = require("Topic")

module.exports = function(parent){
  return (<Router history={History.createHistory()}>
            <Route path="/" component={Display}>
              <IndexRoute component={SubjectsView} freezer={parent.freezer}/>
              <Route path="subjects" component={SubjectsView} freezer={parent.freezer}/>
              <Route path="subject/:subjectName" component={Subject} freezer={parent.freezer}/>
           <Redirect from="subject/:subjectName/topic"
                       to="subject/:subjectName" />
              <Route path="subject/:subjectName/topic/:topicName" component={Topic} freezer={parent.freezer}/>
            </Route>
          </Router>)
}
