let path = require('path')
let ghpages = require('gh-pages')

ghpages.publish(path.join(__dirname,'../_book'), (err) => {
	if (err){console.log(err)}
});
