const { exec } = require('child_process');

const fileName:string = "foo.txt"

exec('wc -l foo.txt', (	
	err:string, 
	stdout:string, 
	stderr: string
	) => {


		stdout = stdout.replace(fileName,"")
		stdout.trim()	
		var numLines: number = +stdout
		// console.log("stdout: " + numLines)
		
		
		for(let i:number = 0; i<numLines; i++){
			// sed -n '7p' foo.txt  // prints the 7th line from file foo.txt
			var query:string = "sed -n "+ "'"+i+"p' "+fileName
			exec(query, (err:string, stdout:string, stderr:string) =>{ 
					
				console.log("index: " + i + "," + stdout )
			});

		}
		
});






