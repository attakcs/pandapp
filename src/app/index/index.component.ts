import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.service.getMasterData();
  }

  indexes() {
    return this.service.getIndexes();
  }
}