import { HttpClient } from '@angular/common/http';
import { DataExchangeService } from './../../services/data-exchange.service';
import { Component, OnInit } from '@angular/core';
import { BASE_AMOUNTS,CURRENCY } from '@app/configs';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
ipAddress:string='';
baseAmount:CURRENCY[]=[];
getStock:any={};
headerList:any=[
  {label: 'No', key:'no'},
  {label: 'Amount', key:'amount'},
  {label: 'Count', key:'count'},
  {label: 'Total', key:'total'}
]

constructor(private dataExchangeService:DataExchangeService,private http: HttpClient,){
this.getStock = this.dataExchangeService.getStockAmount().subscribe((data:any)=>{
  if(data.length>0){
    this.baseAmount= data;
  }
})
}
ngOnInit(): void {
  this.getIPAddress();
  this.baseAmount = BASE_AMOUNTS;
  this.dataExchangeService.setStockAmount(this.baseAmount);
}
getIPAddress() {
  this.http.get('http://api.ipify.org/?format=json').subscribe((res: any) => {
    this.ipAddress = res.ip;
    if(this.ipAddress){
      localStorage.setItem('atmAuth',this.ipAddress)
    }
  });
}
ngOnDestroy(){
if(this.getStock){
  this.getStock.unsubscribe()
}
}

}
