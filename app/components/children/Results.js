// Include React
var React = require("react");

// Creating the Results component
class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state =  { 
      // results:""
      // saved:[]
    };
  }
  consolelog(test){
    console.log(test);
  }

displayArticles(articles){
  for(i=0;i<5;i++){
    var nytId = articles[i]._id;
    var title = articles[i].headline.main;
    var date = articles[i].pub_date;
  
   	if (articles[i].web_url){
 			var url = articles[i].web_url;
 		} else {
 			var url = "#";
 		};


  }








}
  // Here we render the function
  render() {
    return (
    <div className="col-xs-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Articles</h3>
        </div>
        <div id="articlesContainer" className="panel-body">
          <div className="row">
              <div className="col-xs-8">
              <a href="http://www.link.com" target="_blank"><h2>Title</h2></a>
              </div>
              <div className="col-xs-2">
                <p>date</p>
              </div>
              <div className="col-xs-1">
                <button className="btn btn-default" id="save" type="submit">Save</button>
              </div>
            </div>
        </div>
      </div>
  </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Results;
