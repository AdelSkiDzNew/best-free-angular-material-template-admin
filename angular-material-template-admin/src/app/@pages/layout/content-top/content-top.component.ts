import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Navigation} from "../../../@core/models/models";
import {AppService} from "../../../@core/services/app.service";

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit, OnDestroy {

  navigations: (any)[] = [];
  dataSubscription$: Subscription  = Subscription.EMPTY;

  constructor(public appService: AppService, private _router: Router) {
    this.getRouteTitle();
  }

  private getRouteTitle() {
    this.dataSubscription$ = this.appService.data$.subscribe((data: any) => {
      if (data.ev === 'isActived') {
        this.navigations = data.value.navigation;
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dataSubscription$.unsubscribe();
  }

  navigate(routerLink: any, actived: boolean) {
    if(actived)
    this._router.navigate([routerLink?.path], {queryParams: routerLink?.queryParams});
  }
}

