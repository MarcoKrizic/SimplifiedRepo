//working with JSONs
fs = require ('fs');

function writeFilePromise(filePath, data){
	return new Promise( (resolve, reject) => {
		fs.writeFile(filePath, data, (err) => {
			if (!err)
				resolve();
			else
				reject (err);
		});
	});
}

var myInfo = { 
	name: "Marco", 
	age: 22, 
	city: "Kitchener" 
};
console.log (myInfo)
var myJSON = JSON.stringify(myInfo, null, 4);
console.log (myJSON)

//write JSON into file

writeFilePromise("myJSON.json", myJSON)
	.then (() =>{
		console.log("DONE!");
	})
	.catch( err =>{
		console.error(err);
	});

	
