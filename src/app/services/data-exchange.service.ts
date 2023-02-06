import { CURRENCY } from './../config/type';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataExchangeService {
  StockAmount = new BehaviorSubject([] as CURRENCY[]);
  currentStockAmount:any=[];
  history:any=[];
  userIP:any=null
  user = new BehaviorSubject(undefined);
  transactionHistory = new BehaviorSubject([]);
  constructor() {}
  setTransactionHistory(value:any){
    this.transactionHistory.next(value)
  }
  getTransactionHistory(){
    return this.transactionHistory.asObservable();
  }
  setUser(value:any){
    this.userIP=value;
    this.user.next(value)
  }
  getUser(){
    return this.user.asObservable();
  }
  setStockAmount(value: CURRENCY[]) {
    this.currentStockAmount = value;
    this.StockAmount.next(value);
  }
  getStockAmount() {
    return this.StockAmount.asObservable();
  }
  withdrawAmount(amount: number) {
    let mappedObj = this.processMapping();
    let m = this.getMoney(amount, mappedObj)
    if(m){
    this.currentStockAmount= this.deductAmount(m);
    this.trackTransaction(amount);
  }
    return m
  }
  processMapping() {
    let obj: any = {};
    this.getStockAmount().subscribe((data: any) => {
      this.currentStockAmount= data;
      data.forEach((element: any) => {
        obj[element.amount] = element.count;
      });
    });
    return obj;
  }
  getMoney(amount: number, limits: number) {
    return this.recur(
      amount,
      Object.keys(limits)
        .map(Number)
        .sort((a, b) => b - a),
      limits
    );
  }
  recur(amount: number, nominals: any, limits: any) {
    if (amount == 0) return {}; // success
    if (!nominals.length) return; // failure
    let nominal = nominals[0];
    let count = Math.min(limits[nominal], Math.floor(amount / nominal));
    for (let i = count; i >= 0; i--) {
      let result: any = this.recur(
        amount - i * nominal,
        nominals.slice(1),
        limits
      );
      if (result) return i ? { [nominal]: i, ...result } : result;
    }
  }
  deductAmount(m:any){
    Object.keys(m).forEach((noteValue:any) => {
      this.currentStockAmount.forEach((element:any) => {
        if(element.amount==noteValue){
          element.count = element.count- m[noteValue]
        }
      });
    });
    this.setStockAmount(this.currentStockAmount)
  }
  trackTransaction(money:any){
      if(this.userIP){
          this.history.push({'IPAddress':this.userIP, 'Date':Date.now(),'withdrawn':money });
          this.setTransactionHistory(this.history);
      }
  }
  
  
}
