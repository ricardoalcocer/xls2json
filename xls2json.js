exports.convertFile = function(infile,outpath,callback){
	var XLS 		= require('xlsjs');
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

			callback(null, 'Done.  Output written to ' + outpath);
		}catch(e){
			callback(e, 'Error');
		}
	}else{
		console.log("USAGE: xls2json [xls_file] [output_folder]");
	}
}