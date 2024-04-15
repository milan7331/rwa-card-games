import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rwa-card-games';

  constructor(private primengConfig: PrimeNGConfig) {

  }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}



