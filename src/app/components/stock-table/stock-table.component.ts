import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnInit, OnChanges{
@Input() tableHeaders:any=[];
@Input() tableData:any=[];
@Input() isEditable:boolean = false;
@Output() changedData =new EventEmitter();
totalRecords:number=0;
loading:any=false;
ngOnInit(){
  this.loading= false;
  this.totalRecords= this.tableData.length;
}
ngOnChanges(changes: SimpleChanges): void {
  if(changes['tableHeaders']){
this.tableHeaders = changes['tableHeaders'].currentValue
  }
  if(changes['tableData']){
    this.tableData = changes['tableData'].currentValue
      }
}
loadAmountLazy(event:any){
}
saveChanges(){
this.changedData.emit(this.tableData);
}
}
