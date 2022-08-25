import { Component, OnInit } from '@angular/core';
import {ContentTopValueComponent} from "../layout/content-top/content-top-value.component";
import {AppService} from "../../@core/services/app.service";
import {Route} from "../page-routing.module";
import {PeriodicElement} from "../typography/typography.component";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent extends ContentTopValueComponent implements OnInit {
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
      {actived: true, name: Route.Icons, routerLink: Route.Icons}
    ]
  }

}

export const ELEMENT_DATA: PeriodicElement[] = [
  {header: '3d_rotation', value: "<mat-icon> 3d_rotation </mat-icon>", name:'3d rotation icon'},
  {header: 'accessibility', value: "<mat-icon>accessibility</mat-icon>", name:'accessibility icon'},
  {header: 'accessible_forward', value: "<mat-icon>accessible_forward</mat-icon>", name:'accessible forward icon'},
  {header: 'account_balance', value: "<mat-icon>account_balance</mat-icon>", name:'account_balance'},
  {header: 'account_circle', value: "<mat-icon>account_circle</mat-icon>", name:'account circle icon'},
  {header: 'add_shopping_cart', value: "<mat-icon>add_shopping_cart</mat-icon>", name:'add shopping cart icon'},
  {header: 'alarm_on', value: "<mat-icon>alarm_on</mat-icon>", name:'alarm on icon'},
  {header: 'android', value: "<mat-icon>android</mat-icon>", name:'android'},
  {header: 'build', value: "<mat-icon>build</mat-icon>", name:'build icon'},
  {header: 'calendar_today', value: "<mat-icon>calendar_today</mat-icon>", name:'calendar today icon'},
  {header: 'check_circle_outline', value: "<mat-icon>check_circle_outline</mat-icon>", name:'check circle outline icon'},
  {header: 'code', value: "<mat-icon>code</mat-icon>", name:'code icon'},
  {header: 'dashboard', value: "<mat-icon>dashboard</mat-icon>", name:'dashboard icon'},
  {header: 'input', value: "<mat-icon>input</mat-icon>", name:'input icon'},
  {header: 'invert_colors', value: "<mat-icon>invert_colors</mat-icon>", name:'invert colors icon'},
  {header: 'launch', value: "<mat-icon>launch</mat-icon>", name:'launch icon'},
  {header: 'lock', value: "<mat-icon>lock</mat-icon>", name:'lock icon'},
  {header: 'lock_open', value: "<mat-icon>lock_open</mat-icon>", name:'lock open icon'},
  {header: 'note_add', value: "<mat-icon>note_add</mat-icon>", name:'note add icon'},
  {header: 'open_in_browser', value: "<mat-icon>open_in_browser</mat-icon>", name:'open in browser icon'},
  {header: 'open_with', value: "<mat-icon>open_with</mat-icon>", name:'open with icon'},
  {header: 'perm_camera_mic', value: "<mat-icon>perm_camera_mic</mat-icon>", name:'perm camera mic icon'},
  {header: 'perm_identity', value: "<mat-icon>perm_identity</mat-icon>", name:'perm identity icon'},
  {header: 'polymer', value: "<mat-icon>polymer</mat-icon>", name:'polymer icon'},
  {header: 'print', value: "<mat-icon>print</mat-icon>", name:'print icon'},
  {header: 'query_builder', value: "<mat-icon>query_builder</mat-icon>", name:'query builder icon'},
  {header: 'question_answer', value: "<mat-icon>question_answer</mat-icon>", name:'question answer icon'},
  {header: 'settings_input_antenna', value: "<mat-icon>settings_input_antenna</mat-icon>", name:'settings answer icon'},
  {header: 'settings_input_hdmi', value: "<mat-icon>settings_input_hdmi</mat-icon>", name:'settings_input_hdmi icon'},
  {header: 'settings_voice', value: "<mat-icon>settings_voice</mat-icon>", name:'settings_voice icon'},
];
