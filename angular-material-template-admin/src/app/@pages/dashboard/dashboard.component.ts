import {Component, OnInit} from '@angular/core';
import {AppService} from "../../@core/services/app.service";
import {Title, ValueContentTop} from "../../@core/models/models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private static valueContentTopArray: ValueContentTop[] = [];

  constructor(private _appService: AppService) {
  }

  ngOnInit(): void {
    this._routeEvent();
    DashboardComponent._push();
  }

  private _routeEvent(): void {
    this._appService.routeEvent(DashboardComponent.titleBuilder());
  }

  private static titleBuilder(): Title {
    return {ev: 'isActived', value: DashboardComponent.valueContentTopArray};
  }

  private static _push(): void {
    DashboardComponent
      .valueContentTopArray
      .push(
        {actived: false, name: 'Home', routerLink: '/'},
        {actived: false, name: ' / ', routerLink: '/'},
        {actived: true, name: 'dashboard', routerLink: '/'}
      )
  }


}
