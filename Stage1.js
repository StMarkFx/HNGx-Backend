const express = require("express")
const path = require('path')
const app = express()


app.get("/api", function(req, res){

	var name = req.query.slack_name
	var track = req.query.track
	
	res.setHeader("Content-type","application/json");
    res.writeHead(200);
    var result=  {
        slack_name: name,
        current_day: "Monday",
        utc_time: new Date().toISOString(),
        track: track,
        github_file_url: "https://github.com/StMarkFx/backend1/commits?author=StMarkFx",
        github_repo_url: "https://github.com/StMarkFx/backend1",
        status_code: 200
      }
      res.end(JSON.stringify(result))
})

app.listen(8080, function(error){
	if(error) throw error
})
