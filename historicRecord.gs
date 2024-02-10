function populateHistoricRecord() {

  var sheetHistoricData = SpreadsheetApp.getActive().getSheetByName('Historic Data')
  var sheetSummary = SpreadsheetApp.getActive().getSheetByName('Summary')
  var sheetSummary2 = SpreadsheetApp.getActive().getSheetByName('2 - Summary')

  var dateRecord = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
  var totQualDivid = sheetSummary.getRange('B1').getValue();
  var totQualDivid_marginAcct = sheetSummary.getRange('B2').getValue();
  var totQualDivid_nonMarginAcct = sheetSummary.getRange('B3').getValue();
  var totQualDivid_grandTot = sheetSummary.getRange('B4').getValue();
  var totQualDivid_marginAcct2 = sheetSummary.getRange('B5').getValue();
  var totLev_marginAcct = sheetSummary.getRange('B7').getValue();
  var totLev_marginAcct2 = sheetSummary.getRange('B8').getValue();
  var totLev_grandTot = sheetSummary.getRange('B9').getValue();
  var totUnqualDivi = sheetSummary.getRange('B11').getValue();
  var totUnqualDivid_marginAcct = sheetSummary.getRange('B12').getValue();
  var totUnqualDivid_marginAcct2 = sheetSummary.getRange('B13').getValue();
  var totUnqualDivid_nonMarginAcct = sheetSummary.getRange('B14').getValue();
  var totUnqualDivid_grandTot = sheetSummary.getRange('B15').getValue();
  var grandTot_DistPayDown_Margin1 = sheetSummary.getRange('B17').getValue();
  var grandTot_DistPayDown_Margin2 = sheetSummary2.getRange('B9').getValue();
  var grandTot_CurrPortValue = sheetSummary.getRange('D1').getValue();
  var grandTot_CurrPortValue_Margin = sheetSummary.getRange('D2').getValue();
  var grandTot_CurrPortValue_NonMargin = sheetSummary.getRange('D3').getValue();
  var totFedTaxFreeIntPor = sheetSummary.getRange('D11').getValue();
  var totFedTaxFreeIntPor_margin = sheetSummary.getRange('D12').getValue();
  var totFedTaxFreeIntPor_margin2 = sheetSummary.getRange('D13').getValue();
  var totFedTaxFreeIntPor_nonMargin = sheetSummary.getRange('D14').getValue();
  var totGrand_allAccts = sheetSummary.getRange('D15').getValue();
  var yearRecord = Utilities.formatDate(new Date(), "GMT-5", "yyyy")

  sheetHistoricData.appendRow([dateRecord, totQualDivid,totQualDivid_marginAcct, totQualDivid_nonMarginAcct, totQualDivid_grandTot, totQualDivid_marginAcct2,"" ,totLev_marginAcct, totLev_marginAcct2, totLev_grandTot, totUnqualDivi, totUnqualDivid_marginAcct, totUnqualDivid_marginAcct2, totUnqualDivid_nonMarginAcct, totUnqualDivid_grandTot, grandTot_DistPayDown_Margin1, grandTot_DistPayDown_Margin2, grandTot_CurrPortValue, grandTot_CurrPortValue_Margin, grandTot_CurrPortValue_NonMargin, totFedTaxFreeIntPor, totFedTaxFreeIntPor_margin, totFedTaxFreeIntPor_margin2, totFedTaxFreeIntPor_nonMargin,totGrand_allAccts  ,yearRecord]);

  var range = sheetHistoricData;
  range.sort(1, false);
  
}
