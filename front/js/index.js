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
        name: "History"
      }, {
        name: "Chemistry"
      },
      {
        name: "English"
      }
    ]
  })

  ReactDOM.render(<FreezerWrapper freezer={this.freezer}>{routes(this)}</FreezerWrapper>, document.body)
}
