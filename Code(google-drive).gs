function doPost(e) {
  var data = Utilities.base64Decode(e.parameters.mydata);
  var blob = Utilities.newBlob(data, e.parameters.mimetype, e.parameters.filename);
  var dropbox = "Research Papers";
  var folder, folders = DriveApp.getFoldersByName(dropbox);
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(dropbox);
  }
  
  folder.createFile(blob);
  
  ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success'}))
      .setMimeType(ContentService.MimeType.JSON)
  
//  var output = HtmlService.createHtmlOutput("<b>Done!</b>");
//  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
//  return output;
 // return String(0);
  // return ContentService.createTextOutput("Done.") <--- Here, an error occurred.
}