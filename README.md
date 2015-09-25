# XLS2JSON

Node app that takes an Excel spreadsheet and convertes each worksheet into an individual JSON file. 

## Install

```
sudo npm install -g xls2json
```

## CLI Usage

```
xls2json my_excel_sheet.xls /output/
```

## Library Usage

```
var xls2json = require('xls2json');

xls2json.convertFile(infile,outpath,function(err,data){
	if (err){
		// there was an error
	}else{
		// it's all good
	}
});
```


## License

MIT License - [http://alco.mit-license.org](http://alco.mit-license.org)