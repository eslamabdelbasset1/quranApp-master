import {Component, OnInit, ViewChildren} from '@angular/core';
import {QuranService} from "../quran.service";
import {NgxSpinnerService} from "ngx-spinner";
import {FavoriteService} from "../favorite.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@ViewChildren('favIcon') favIcon:any;
fav:any;

  constructor( private _QuranService: QuranService,
               private _NgxSpinnerService: NgxSpinnerService,
               public _FavoriteService: FavoriteService
  ) {
    this._NgxSpinnerService.show();
  }


  ngOnInit(): void
  {
    this._QuranService.getAllQuraa().subscribe((response)=>{
      this._FavoriteService.quraa = response;
      this._FavoriteService.favReciterIndex.forEach(
        (value:any, index:any) =>{
          this._FavoriteService.quraa[value].isFav = true;
        }
      );
      window.scrollTo(0,0);
      this._NgxSpinnerService.hide();
    });
  }

}
