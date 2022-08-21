import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Title, ValueContentTop} from "../../../@core/models/models";
import {AppService} from "../../../@core/services/app.service";

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit, OnDestroy {

  dataSubscription$: Subscription  = Subscription.EMPTY;
  routeTitle: Title | undefined;

  constructor(public _appService: AppService, private _router: Router) {
    this.getRouteTitle();
  }

  ngOnInit(): void {}


  navigate(value: ValueContentTop) {
   /* if(actived)
      this._router.navigate([routerLink?.path], {queryParams: routerLink?.queryParams});*/
  }

  private getRouteTitle() {
    this._appService.data$.subscribe((data:Title) => {
      if (data.ev === 'isActived') {
        this.routeTitle = {ev: data.ev, value : data.value};
      }
    });
  }
  ngOnDestroy(): void {
    this.dataSubscription$.unsubscribe();
  }


}

