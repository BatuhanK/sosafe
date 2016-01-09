#! /usr/bin/env node

var applescript = require('applescript');
var fs = require('fs');
if(process.platform != 'darwin'){
  console.log("This demo is OSX only.");
  process.exit(1);
}

applescript.execFile('SOHIDDENSCRIPT.file',function(err,d){
  if(err){
    console.log("Shit. Applescript throwed an error.");
    console.log(err);
  } else {
    console.log("Please don't use any code from reading it's source code if you don't trust the owner.")
  }
})
