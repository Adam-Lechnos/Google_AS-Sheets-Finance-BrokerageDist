function errorCheckSummary() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("D17");
  var errorRangeADI = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Annual Dividend Income (margin)").getRange("R2").getValue();
  var errorRangeADI2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2 - Annual Dividend Income (margin)").getRange("R2").getValue();
  var errorRangeADINonMargin = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Annual Dividend Income (non-margin)").getRange("N2").getValue();
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus && !errorRangeADI && !errorRangeADI2 && !errorRangeADINonMargin){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Error in spreadsheet "Brokerage Taxable Distribution Income / Value", "Summary" tab (https://docs.google.com/spreadsheets/d/1w-VEbztIxeHQCyk-djNfMLML13XtZxiYi-oV4icEE0U)'; // Second column
    var subject = 'Spreadsheet Error - Brokerage Taxable Distribution Income / Value';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}