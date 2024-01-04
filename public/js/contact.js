var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');

var fs = require('fs');


var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routing


// Read the folder path
var folderPath = path.join(__dirname, "../images");

// Read the files in the folder
fs.readdir(folderPath, function(err, files) {
    if (err) {
      console.log("Error reading folder:", err);
      return;
    }
  
    // Log the files in the folder
    console.log("Files in the folder:");
    files.forEach(function(file) {
      console.log(file);
    });
  });


// Specify the folder path where the images are located
var imageFolderPath = path.join(__dirname, "../images");

// Read the images from the folder
fs.readdir(imageFolderPath, function(err, files) {
  if (err) {
    console.log("Error reading image folder:", err);
    return;
  }

  // Serve the images
  app.get("/images/:imageName", function(req, res) {
    var imageName = req.params.imageName;
    var imagePath = path.join(imageFolderPath, imageName);

    res.sendFile(imagePath);
  });
});



// Read the HTML file
var htmlFile = fs.readFileSync(path.join(__dirname, "./contact.html"), "utf-8");

// Read the CSS files
var contactCssFile = fs.readFileSync(path.join(__dirname, "./contact.css"), "utf-8");
var headFootCssFile = fs.readFileSync(path.join(__dirname, "../HeadFoot.css"), "utf-8");

// Serve the HTML file
app.get("/", function(req, response) {
  response.send(htmlFile);
});

// Serve the CSS files
app.get("/contact.css", function(req, response) {
  response.setHeader("Content-Type", "text/css");
  response.send(contactCssFile);
});

app.get("/HeadFoot.css", function(req, response) {
  response.setHeader("Content-Type", "text/css");
  response.send(headFootCssFile);
});

app.post("/send_email", function(req, response){
    var from = req.body.from;
    var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eriswebsend@gmail.com',
            pass: 'rpljeqpcktorjqqm'
        }
    });

    var mailOptions = {
        from: from,
        to: "eriswebsend@gmail.com",
        subject: "Name: " + subject + " | Contact Form | " + from,
        text: message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error)
        } else {
            console.log("Email Send: " + info.response)
        }
        response.redirect("/")
    })

})

app.use(express.static(path.join(__dirname)));

// initialize web server
server.listen(port, function(){
    console.log("Starting Server on port: " + port)
})