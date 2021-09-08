import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ElsourComponent} from "./elsour/elsour.component";
import {AhadethComponent} from "./ahadeth/ahadeth.component";
import {AhadethItemComponent} from "./ahadeth-item/ahadeth-item.component";
import {FavouritesComponent} from "./favourites/favourites.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  { path: 'home/:id', component: ElsourComponent },
  { path: 'ahadeth', component: AhadethComponent },
  { path: 'ahadeth/:id', component: AhadethItemComponent },
  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
