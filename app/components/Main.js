// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
import Results from "./children/Results";
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
class Main extends React.Component {


  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  constructor(props) {
    super(props)
    this.state =  { 
      topic: "",
      startYr: "",
      endYr: "" ,
      res:"",
      startYrSearch: "",
      endYrSearch:"", 
      saved:[]
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  // The moment the page renders get the History
  componentDidMount() {
    // Get the latest history.
    // helpers.getHistory().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.history) {
    //     console.log("History", response.data);
    //     this.setState({ history: response.data });
    //   }
    // }.bind(this));
  }

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate() {

    // // Run the query for the address
    // helpers.runQuery(this.state.searchTerm).then(function(data) {
    //   if (data !== this.state.results) {
    //     console.log("Address", data);
    //     this.setState({ results: data });

    //     // After we've received the result... then post the search term to our history.
    //     helpers.postHistory(this.state.searchTerm).then(function() {
    //       console.log("Updated!");

    //       // After we've done the post... then get the updated history
    //       helpers.getHistory().then(function(response) {
    //         console.log("Current History", response.data);

    //         console.log("History", response.data);

    //         this.setState({ history: response.data });

    //       }.bind(this));
    //     }.bind(this));
    //   }
    // }.bind(this));
  }
  // // This function will respond to the user input
  handleChange(event) {
   
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.id;

  //    this.setState({
  //     [name]: value
  //   });
  //    console.log(this);
  }

  // When a user submits...
  handleSubmit(event) {
//     // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
//     // clicking the button
    event.preventDefault();
    console.log('event: '+event);

    if (!(this.state.topic)){
		alert("Please enter a topic.");
    } else{
      var topicInput = this.state.topic.trim();
      this.setState({topic: topicInput});
   
	};
    var beginDateInput = this.state.startYr.trim();
	  var endDateInput =  this.state.endYr.trim();

    var beginDateNumber = (Number(beginDateInput));
    var endDateNumber = (Number(endDateInput));
    var date = new Date();
    var year = date.getFullYear();

//  //set beginDate
    let searchState = {};

    if(beginDateNumber && 1851 <= beginDateNumber &&  beginDateNumber <= year && beginDateNumber <= endDateNumber){
     var beginDateString = beginDateInput +"0101";
    searchState.startYrSearch = beginDateString;
    	// beginDate = beginDateInput +"0101";
    	} else {
    		alert("Beginning date must be before ending date.");
    	};

    if(endDateNumber && 1851 <= endDateNumber &&  endDateNumber <= year) {
   	    searchState.endYrSearch = endDateInput +"1231"
     	// endDate = endDate +"1231";
   	} else {
    			alert("End date must be after start date and no later than this year.");
    };

    console.log(this.state);
    this.setState(searchState, ()=>{
          helpers.runQuery(this.state).then(function(res) {
      if (res) {
        this.setState({res});
        // Results.renderContainer();
      }

    // Query.runQuery(this.state).then(function(response) {
    //   console.log(response);
    // });
       }.bind(this));
    })

  }
  // This function allows childrens to update the parent.
  setTerm(obj) {
    this.setState(obj);
  }


  // Here we render the function
  render() {
     return (
       <div className="container">
         <div className="jumbotron">
           <h1>New York Times Article Scrubber</h1>
         </div>

         <div className="row">

           <Form mainState={this.state} handleSubmit={this.handleSubmit.bind(this)} setTerm={this.setTerm.bind(this)} />

         </div>

    
          <div className="row">

            <Results res={this.state.res}  setTerm={this.setTerm.bind(this)} />

          </div>
        </div>
     );
  }
};

// Export the component back for use in other files
module.exports = Main;
