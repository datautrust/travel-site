exports.handler = function(event,context,callback) {
/*this is the good code to run cloud functions on netlify. the code below is to test locally Sec 20.64 CORS soln
	let body
	const  secretContent = `
	 <h3> Welcome ot the scret area </h3>
	 <p>here we can tell you the sky is <strong>blue</strong>. </p>
	`
	if (event.body) {
		body = JSON.parse(event.body)
		
	} else { 
		body = {}
	}
	
	if (body.password =="javascript") {
		callback(null,{
		statusCode: 200,
		body: secretContent
		
		})
	} else {
		callback(null,{
		statusCode: 401
		})
	}
	
 end code for using netlify to test*/
 
 // local test code
  const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers" : "Content-Type"
  }
 
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 200,
      headers,
      body: "This was not a POST request"
    })
  }
  
  const secretContent = `
  <h3>Welcome To The Secret Area</h3>
  <p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four.</p>
  `
  
  let body
 
  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }
 
  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      headers,
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401,
      headers
    })
  }
 
 
 
}