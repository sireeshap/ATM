import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RestockComponent } from './components/restock/restock.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import {TableModule} from 'primeng/table';
import { StockTableComponent } from './components/stock-table/stock-table.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OverviewComponent,
    RestockComponent,
    WithdrawComponent,
    TransactionsComponent,
    StockTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    HttpClientModule,
    CommonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
