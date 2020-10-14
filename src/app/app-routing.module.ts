import { HomeComponent } from './home/home.component';
import { CommodityComponent } from './commodity/commodity.component';
import { CryptoComponent } from './crypto/crypto.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'indexes', component: IndexComponent },
  { path: 'cryptos', component: CryptoComponent },
  { path: 'commodities', component: CommodityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
