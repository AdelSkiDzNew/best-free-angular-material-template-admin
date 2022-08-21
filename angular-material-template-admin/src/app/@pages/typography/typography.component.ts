import { Component } from '@angular/core';
import {Route} from "../page-routing.module";
import {AppService} from "../../@core/services/app.service";
import {ContentTopValueComponent} from "../layout/content-top/content-top-value.component";

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent extends ContentTopValueComponent {

  constructor(_appService: AppService) {
    super(_appService);
  }

  override: any // @ts-ignore
  valueContentTopArray() {
    return [
      {actived: false, name: 'Home', routerLink: Route.Dashboard},
      {actived: false, name: ' / ', routerLink: '/'},
      {actived: true, name: Route.Typography, routerLink: Route.Typography}
    ];
  }
}
