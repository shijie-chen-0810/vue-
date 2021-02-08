const path = require('path')
 const glob = require('glob')
 const START_PATH = '/src/pages/'
 const PAGE_PATH = path.resolve(__dirname, '.' + START_PATH) 
 exports.pages = function () {
  var entryFiles = glob.sync(PAGE_PATH + '/**/*.html')
  var obj = {}
  entryFiles.forEach((filePath) => {
   var dirPath = filePath.substring(0, filePath.lastIndexOf('/'))
   var dirName = dirPath.substring(dirPath.lastIndexOf('/') + 1)
   var filename = filePath.substring(filePath.lastIndexOf(START_PATH) + START_PATH.length, filePath.lastIndexOf('/'))
   if (filename.endsWith(dirName)) {
    obj[filename] = {
     entry: filePath.substring(0, filePath.lastIndexOf('.html')) + '.js',
     template: filePath.substring(0, filePath.lastIndexOf('.html')) + '.html'
    }
   }
  })
  return obj
 }