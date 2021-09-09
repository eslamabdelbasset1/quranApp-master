import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ElsourComponent } from './elsour/elsour.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AhadethComponent } from './ahadeth/ahadeth.component';
import { AhadethItemComponent } from './ahadeth-item/ahadeth-item.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngMusicPlayerModule } from  'ang-music-player';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ElsourComponent,
    FavouritesComponent,
    AhadethComponent,
    AhadethItemComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
