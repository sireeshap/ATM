import { Component, Inject, OnInit } from '@angular/core';
import { BASE_AMOUNTS,CURRENCY } from '@app/configs';
@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent  implements OnInit {

  baseAmount:CURRENCY[]=[];
  isEditable:boolean = true;
  saved:string = '';
  headerList:any=[
    {label: 'No', key:'no'},
    {label: 'Amount', key:'amount'},
    {label: 'Count', key:'count'},
    {label: 'Total', key:'total'}
  ]
  
  ngOnInit(): void {
    this.baseAmount = BASE_AMOUNTS;
  }
  getTableData(event:any){
    if(event){
this.saved = 'Restocked successfully'
    }
    else{
      this.saved = 'Unable to Restock. Please try again'
    }
  }
  ngOnDestroy(){

  }
}
