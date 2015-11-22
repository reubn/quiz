require("../css");
require("../fonts");

const React = require("react");
const ReactDOM = require("react-dom");

const routes = require("routes")

const Freezer = require("freezer-js")
const FreezerWrapper = require("FreezerWrapper")


module.exports = function(config){
  this.config = config

  this.freezer = new Freezer({
    subjects: [
      {
        name: "History",
        colour: "#FFEB3B",
        topics: [
          {
            name: "A",
            description: ""
          }
        ]
      }, {
        name: "Chemistry",
        colour: "#4CAF50",
        topics: [
          {
            name: "G",
            description: ""
          }
        ]
      },
      {
        name: "English",
        colour: "#F44336",
        topics: [
          {
            name: "F",
            description: ""
          }
        ]
      }
    ]
  })

  ReactDOM.render(
    <FreezerWrapper freezer={this.freezer}>
    {routes(this)}
  </FreezerWrapper>, document.body)
}
