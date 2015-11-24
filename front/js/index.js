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
    "subjects": [
      {
        "name": "History",
        "desc": "History, from Greek ἱστορία, historia, meaning 'inquiry, knowledge acquired by investigation' is the study of the past, particularly how it relates to humans",
        "colour": "#FFEB3B",
        "topics": [
          {
            "name": "Germany and the Weimar Republic",
            "description": "A is such a great Topic to study"
          },
          {
            "name": "B",
            "description": "B is such a great Topic"
          },
          {
            "name": "C",
            "description": "C is such a great Topic to study"
          },
          {
            "name": "D",
            "description": "D is sooo Good"
          },
          {
            "name": "E",
            "description": "E really is such a great Topic to study"
          }
        ]
      },
      {
        "name": "Chemistry",
        "desc": "",
        "colour": "#4CAF50",
        "topics": [
          {
            "name": "G",
            "description": ""
          }
        ]
      },
      {
        "name": "English",
        "desc": "",
        "colour": "#F44336",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Physics",
        "desc": "",
        "colour": "#E91E63",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Maths",
        "desc": "",
        "colour": "#00CFEB",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Religion",
        "desc": "",
        "colour": "#FFC107",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Biology",
        "desc": "",
        "colour": "#8BD436",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Spanish",
        "desc": "",
        "colour": "#FFEB3B",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "German",
        "desc": "",
        "colour": "#FF5722",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Infomation and Technology",
        "desc": "",
        "colour": "#3F51B5",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "Nothing",
        "desc": "",
        "colour": "#9E9E9E",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "French",
        "desc": "",
        "colour": "#673AB7",
        "topics": [
          {
            "name": "F",
            "description": ""
          }
        ]
      },
      {
        "name": "English",
        "desc": "",
        "colour": "#F44336",
        "topics": [
          {
            "name": "F",
            "description": ""
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
