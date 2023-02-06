import { Router } from '@angular/router';
import { DataExchangeService } from './services/data-exchange.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'atm';
  constructor(private dataExchangeService:DataExchangeService, private router:Router) {
    if(localStorage.getItem('atmAuth')){
      this.dataExchangeService.setUser(localStorage.getItem('atmAuth'))
    }
    else{
      this.router.navigate(['/Overview'])
    }
  }

  ngOnInit(): void {
  }

}
