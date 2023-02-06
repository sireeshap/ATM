import { DataExchangeService } from './../../services/data-exchange.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  withdrawForm:FormGroup = {} as FormGroup;
  withdrawResponce:any=null
  message:string='';
  constructor(private dataExchangeService:DataExchangeService){

  }
  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      withDrawAmount:new FormControl(0)
    });
  }
 
  onSubmit(form:FormGroup){
    if(form.valid){
    this.withdrawResponce= this.dataExchangeService.withdrawAmount(form.value.withDrawAmount);
    if(this.withdrawResponce){
      this.message= 'Successsfully dispatched'+ JSON.stringify(this.withdrawResponce)
   }
   else{
    this.message = 'unable to dispense the requested amount'
   }
  }
  }
}
