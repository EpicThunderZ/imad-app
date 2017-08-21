var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one' : {
    title: 'Article One | Janak Shah',
    heading: 'Article One',
    date: 'Aug 21 2017',
    content: `<p>This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>
            <p>This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.</p>`
},
    'article-two' : {
        title: 'Article Two | Janak Shah',
    heading: 'Article Two',
    date: 'Aug 21 2017',
    content: `<p>This is the content for my second article</p>`
    },
    'article-three' : {
        title: 'Article Three | Janak Shah',
    heading: 'Article Three',
    date: 'Aug 21 2017',
    content: `<p>This is the content for my third article</p>`
    }
};
function createTemplate (data) {
    var title=data.title;
    var date= data.date;
    var heading = data.heading;
    var content = data.content;

var HTMLtemplate= 
`
<html>
    <head>
        <title>
        ${title}
            
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
        
    </head>
    <body>
        <div class="container">
        <div>
           <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return HTMLtemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'i', 'index.html'))
});

app.get('/:articleName',function (req, res) {
    var articleName=rec.params.articleName
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
