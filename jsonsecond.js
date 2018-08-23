// assignment 2 continued
fs = require ('fs');

function readFilePromise(filePath, code){
	return new Promise( (resolve, reject) => {
		fs.readFile(filePath, code, (err, data) => {
			if (!err)
				resolve(data);
			else
				reject (err);
			});
		});
}
	
function writeFilePromise(filePath, data){
	return new Promise( (resolve, reject) =>{
		fs.writeFile(filePath, data, (err) => {
			if (!err)
				resolve();
			else
				reject (err);
		});
	});
}

// JSON file pathways

readFilePromise ('./myJSON.json',  'utf8')
	.then ((myJSON) => {
		console.log (myJSON);
		let parsedJSON = JSON.parse (myJSON);
		
		parsedJSON.name = 'Marco';
		parsedJSON.age = '23';
		parsedJSON.city = 'Ottawa';
		
		let newJSON = JSON.stringify(parsedJSON, null, 4);
		console.log (newJSON);
		
		return writeFilePromise ('./myJSONalt.json', newJSON)
	}).then ( () => {
		console.log ("Your file is successfully written!");
	})
	.catch( err => {
		console.log ("HIIII")
		console.error (err);
	});