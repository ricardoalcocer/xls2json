exports.convertFile = function(infile,outpath){
	var XLS 		= require('xlsjs');
	var path 		= require('path');
	var fs 			= require('fs');
	
	if (typeof infile != 'undefined' && typeof outpath != 'undefined'){
		try{
			var workbook 		= XLS.readFile(infile);
			var sheet_name_list = workbook.SheetNames;
			var json 			= '';

			// loop through all sheets
			sheet_name_list.forEach(function(item){
				// grab stringified version of json string
				var json = JSON.stringify(XLS.utils.sheet_to_json(workbook.Sheets[item]), null, "\t"); // ensures the json output is beautified

				// write to disk
				fs.writeFileSync(outpath + '/' + item + '.json',json,'utf-8');
			})

			console.log('Done.  Output written to ' + outpath);
		}catch(e){
			console.log(e);
		}
	}else{
		console.log('Error: Missing arguments');
	}
}