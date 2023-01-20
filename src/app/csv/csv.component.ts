import { Component, OnInit,ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';  
@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'readCSV';  
  
  public records: any[] = [];  
  @ViewChild('csvReader') csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occurred while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let currentRecord = (<string>csvRecordsArray[i]).split(',');  
      if (currentRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.Invoice= currentRecord[0].trim();  
        csvRecord.Branch = currentRecord[1].trim();  
        csvRecord.City = currentRecord[2].trim();  
        csvRecord.Customer= currentRecord[3].trim();  
        csvRecord.Gender = currentRecord[4].trim();  
        csvRecord.Product= currentRecord[5].trim();  
        csvRecord.Price = currentRecord[6].trim();  
        csvRecord.Quantity = currentRecord[7].trim();  
        csvRecord.Tax = currentRecord[8].trim();  
        csvRecord.Total = currentRecord[9].trim();  
        csvRecord.Income = currentRecord[10].trim();  
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  
}  
