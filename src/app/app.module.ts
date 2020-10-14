import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceTilesComponent } from './price-tiles/price-tiles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommodityComponent } from './commodity/commodity.component';
import { CryptoComponent } from './crypto/crypto.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceTilesComponent,
    NavbarComponent,
    CommodityComponent,
    CryptoComponent,
    IndexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
