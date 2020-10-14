import { toMasterdata, toCommodity, toCrypto, toIndex } from './api.definitions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://api.bitpanda.com/v1/masterdata';
  private data = toMasterdata({});

  constructor(private http:HttpClient) { }

  getMasterData() {
    this.http.get(this.url)
      .subscribe((response: any) => {
        this.data = toMasterdata(response.data.attributes)
        console.log(this.data)
      })
  }

  getCryptos() {
    let data = this.data.cryptocoins ? this.data.cryptocoins : [] ;
    return data.map(crypto => toCrypto(crypto));
  }

  getCommodities() {
    let data = this.data.commodities ? this.data.commodities : [] ;
    return data.map(commodity => toCommodity(commodity));
  }

  getIndexes() {
    let data = this.data.indexes ? this.data.indexes : [] ;
    return data.map(index => toIndex(index));
  }
}