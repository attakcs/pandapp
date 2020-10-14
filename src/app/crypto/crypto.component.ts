import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.service.getMasterData();
  }

  cryptos() {
    return this.service.getCryptos();
  }
}
