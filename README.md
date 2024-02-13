# Google Apps Scripts - Google Sheets - Financial - MarginLoan
Google Apps Scripts for Google Sheets - Financial Category - Margin Loan Spreadsheet for automating margin loan interest rates

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| errorCheckMargin1 | Time-driven | Day timer | 10pm to 11pm | Daily |
| errorCheckMargin2 | Time-driven | Day timer | 10pm to 11pm | Daily |
| errorNonMargin | Time-driven | Day timer | 10pm to 11pm | Daily |
| errorCheckMSummary | Time-driven | Day timer | 4pm to 5pm | Daily |
| populateHistoricRecord | Time-driven | Month - 1st | Midnight to 1am | Weekly |
| populateHistoricRecord | Time-driven | Month - 15th | Midnight to 1am | Weekly |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected*

<sup><sub>Spreadsheet Name: `Brokerage Taxable Distribution Income / Value`</sup></sub>
