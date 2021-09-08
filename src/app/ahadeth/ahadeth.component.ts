import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {AhadethService} from "../ahadeth.service";

@Component({
  selector: 'app-ahadeth',
  templateUrl: './ahadeth.component.html',
  styleUrls: ['./ahadeth.component.scss']
})
export class AhadethComponent implements OnInit {

  constructor(
    private _AhadethService: AhadethService,
    public _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
  }
  items: any;
  ngOnInit(): void {
    this._AhadethService.getA7adeth().subscribe((res) => {
      this.items = res.data;
      setTimeout(() => {
        this._NgxSpinnerService.hide();
      }, 600);

      console.log(this.items);
    });
  }

}
