import { Component } from '@angular/core';
import {AppService} from "../../@core/services/app.service";
import {Route} from "../page-routing.module";
import {ContentTopValueComponent} from "../layout/content-top/content-top-value.component";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent extends ContentTopValueComponent {

  constructor(_appService: AppService) {
    super(_appService);
  }


  override: any // @ts-ignore
  valueContentTopArray() {
    return [
      {actived: false, name: 'Home', routerLink: Route.Dashboard},
      {actived: false, name: ' / ', routerLink: '/'},
      {actived: true, name: Route.Colors, routerLink: Route.Colors}
    ];
  }

}
