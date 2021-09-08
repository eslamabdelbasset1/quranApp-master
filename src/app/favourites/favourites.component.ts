import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {FavoriteService} from "../favorite.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(
    public _FavoriteReciterService: FavoriteService,
    public _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._NgxSpinnerService.hide();
    }, 600);
  }

}
