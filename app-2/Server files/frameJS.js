var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var articles= {
  'article-one': {
    heading:'Planets',
    content:'Planets'
  },
  'article-two': {
    heading:'Planets',
    content:'Planets'
  },
  'article-three': {
    heading:'Planets',
    content:'Planets'
  },
  'article-four': {
    heading:'Planets',
    content:'Planets'
  }
};

function createTemplate(data) {
var heading= data.heading;
var content= data.content;
var HTMLtemplate=
`
<html>
    <head>

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
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return HTMLtemplate;
}
app.get('/:articleName', function(res, req) {
  res.send(createTemplate(articles(articleName)));
});
