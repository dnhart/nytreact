// Include React
var React = require("react");

// Creating the Form component
class Form extends React.Component {

  // Here we set a generic state associated with the text being searched for
  constructor(props) {
    super(props)
    this.state =  { 
      topic: "",
      startYr: "",
      endYr: "" 
      // results:"", 
      // saved:[]
    };
     this.handleChange = this.handleChange.bind(this);
     this.handleReset = this.handleReset.bind(this);
  }

  // This function will respond to the user input
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

     this.setState({
      [name]: value
    });
    this.props.setTerm({
      [name]: value
    })

     console.log(this.state);
  }

handleReset(){
    this.setState( {     
      topic: "",
      startYr: "",
      endYr: "" });

    this.props.setTerm({
      topic: "",
      startYr: "",
      endYr: "" 
    })
}


  // Here we describe this component's render method
  render() {
    return (
    <div className="col-xs-12">
    <div className="panel panel-default">
          <div className="panel-heading">Search Parameters</div>
          <div className="panel-body">
          <form onSubmit={this.props.handleSubmit}  onReset={this.handleReset} >
            <div className="form-group">
              <label for="search">Topic</label>
              <input
                value={this.props.mainState.topic}
                type="text"
                className="form-control text-center"
                id="topic"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="start year">Start Year</label>
              <input
                value={this.props.mainState.startYr}
                type="text"
                className="form-control text-center"
                id="startYr"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="end year">End Year</label>
              <input
                value={this.props.mainState.endYr}
                type="text"
                className="form-control text-center"
                id="endYr"
                onChange={this.handleChange}
                required
              />
            </div>
            <button className="btn btn-default" id="nytSearch" type="submit">Search</button>
            <button className="btn btn-default" id="clear" type="reset">Clear</button>
         
          </form>
           </div>
          {/*<!-- Add Panel Footer Here -->*/}
        </div>
        </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Form;
