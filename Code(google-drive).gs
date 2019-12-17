function doPost(e) {
  var data = Utilities.base64Decode(e.parameters.mydata);
  var blob = Utilities.newBlob(data, e.parameters.mimetype, e.parameters.filename);
  var dropbox = "Html Form Files";
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
  
}