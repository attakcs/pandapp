import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.service.getMasterData();
  }

  commodities() {
    return this.service.getCommodities();
  }
}
