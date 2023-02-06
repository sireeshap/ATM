import { TransactionsComponent } from './components/transactions/transactions.component';
import { RestockComponent } from './components/restock/restock.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'Overview',
    component: OverviewComponent,
  },
{
  path: 'Restock',
  component: RestockComponent,
},
{
  path: 'Withdraw',
  component: WithdrawComponent,
},
{
  path: 'Transactions',
  component: TransactionsComponent,
},
{
  path: '**',
  redirectTo: 'Overview',
  pathMatch: 'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
