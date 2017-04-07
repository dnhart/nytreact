// Include React
var React = require("react");

// Creating the Results component
class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state =  { 
      articleInfo:[]
    };
  }
  consolelog(test){
    console.log(test);
  }

displayArticles(){
  // for(i=0;i<5;i++){
  //   var nytId = articles[i]._id;
  //   var title = articles[i].headline.main;
  //   var date = articles[i].pub_date;
  
  //  	if (articles[i].web_url){
 	// 		var url = articles[i].web_url;
 	// 	} else {
 	// 		var url = "#";
 	// 	};

return this.props.res.map(function(articles, index){

  return(
         <div className="row" key={index}>
              <div className="col-xs-8">
              <a href={articles.web_url} target="_blank"><h2>{articles.headline.main}</h2></a>
              </div>
              <div className="col-xs-2">
                <p>{articles.pub_date}</p>
              </div>
              <div className="col-xs-1">
                <button className="btn btn-default" id={articles._id} type="submit">Save</button>
              </div>
            </div>
  );
    }.bind(this));

}

  // Here we render the function

 render() {
    // If we have no articles, render this HTML
    if (!this.props.res) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter search terms to begin...</em>
            </span>
          </h3>
        </li>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return   (
    <div className="col-xs-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Articles</h3>
        </div>
        <div id="articlesContainer" className="panel-body">
          {this.displayArticles()}
        </div>
      </div>
  </div>
    );
  }


};

// Export the component back for use in other files
module.exports = Results;
