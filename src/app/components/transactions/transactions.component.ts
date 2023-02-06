import { Component, OnInit } from '@angular/core';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit{
  transactionHistory:any=[];
  getTransaction:any=null;
  constructor(private dataExchangeService:DataExchangeService){
    this.getTransaction = this.dataExchangeService.getTransactionHistory().subscribe((info:any)=>{
      if(info.length>0){
        this.transactionHistory= info;
      }
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
if(this.getTransaction){
  this.getTransaction.unsubscribe();
}
  }

}
