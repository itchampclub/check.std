  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/sprea*****Sheet url******jcjpo2Io9vC-QRUVmwlwpE/edit");
  var sheet = ss.getSheetByName("Data");
  var sheet1 = ss.getSheetByName("Log");

function notiMsg(msg, notitok) {
  var url = 'https://notify-api.line.me/api/notify';
  var opt = {
  'method' : 'post',
  'contentType': 'application/x-www-form-urlencoded',
  'headers':{'Authorization': 'Bearer '+notitok},//1-1
    'payload' : {'message': msg}
};
      UrlFetchApp.fetch(url, opt);
}

function doGet(e) {
  var stdcode = e.parameter.stdcode;

  var checkid = sheet.getRange(2, 3, sheet.getLastRow(),sheet.getLastColumn()).getValues();
for(var i = 0;i<checkid.length; i++){
 if(stdcode == checkid[i][0]){
   var goodid = true;
   var stdpaid = sheet.getRange(i+2,2).getValue();
   var stdid = sheet.getRange(i+2,3).getValue();
   var first = sheet.getRange(i+2,4).getValue();
   var last = sheet.getRange(i+2,5).getValue();
   var stdtoken = sheet.getRange(i+2,6).getValue();
}
}
if(goodid){
  notiMsg('แจ้งเตือน\nรหัส '+stdid+'\nนักเรียนเข้าเรียนปกติ\nชื่อ '+first+' '+last+'\nผู้ปกครอง '+stdpaid, stdtoken);
    var result = {"desc": "แจ้งเตือนสำเร็จ"};
  return ContentService.createTextOutput(JSON.stringify(result) ).setMimeType(ContentService.MimeType.JSON); 
}else{
  var result = {"desc": "แจ้งเตือนไม่สำเร็จ/ไม่พบรหัสนักเรียน"};
  return ContentService.createTextOutput(JSON.stringify(result) ).setMimeType(ContentService.MimeType.JSON); 
}
}
