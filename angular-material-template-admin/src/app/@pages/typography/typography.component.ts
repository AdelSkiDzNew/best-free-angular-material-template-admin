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

  subtitle: string= "import {MatCardModule} from '@angular/material/card";
  displayedColumns: string[] = ['header', 'value'];
  dataSource = ELEMENT_DATA;

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

export interface PeriodicElement {
  header: string;
  value: string;
  name?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {header: '<h1></h1>', value: 'Write your mat-table and provide data'},
  {header: '<h2></h2>', value: 'Write your mat-table and provide data'},
  {header: '<h3></h3>', value: 'Write your mat-table and provide data'},
  {header: '<h4></h4>', value: 'Write your mat-table and provide data'},
  {header: '<h5></h5>', value: 'Write your mat-table and provide data'},
  {header: '<h6></h6>', value: 'Write your mat-table and provide data'},
  {header: 'app-warning-color-2', value: 'Write your mat-table and provide data'},
  {header: 'app-success-color-2', value: 'Write your mat-table and provide data'},
  {header: 'app-danger-color-2', value: 'Write your mat-table and provide data'},
  {header: 'app-optional-color-2', value: 'Write your mat-table and provide data'},
  {header: 'app-default-color', value: 'Write your mat-table and provide data'},
  {header: 'app-info-color', value: 'Write your mat-table and provide data'}
];

