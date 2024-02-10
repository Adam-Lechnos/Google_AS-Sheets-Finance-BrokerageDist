function errorCheckMargin1() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Annual Dividend Income (margin)").getRange("R2"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Error in spreadsheet "Brokerage Taxable Distribution Income / Value", "Annual Dividend Income (margin)" tab (https://docs.google.com/spreadsheets/d/1w-VEbztIxeHQCyk-djNfMLML13XtZxiYi-oV4icEE0U)'; // Second column
    var subject = 'Spreadsheet Error - Brokerage Taxable Distribution Income / Value';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}