import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {LoggerService} from "../@core/services/logger.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";
import {NavBar} from "../@core/models/models";
import {AppService} from "../@core/services/app.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  private _navbarSubscription$: Subscription  = Subscription.EMPTY;
  private _routerEventSubscription$: Subscription  = Subscription.EMPTY;
  private _titleContentTop: string | undefined;
  public loading: boolean  = false ;
  public navbars: Array<NavBar> = [];
  public title: string | undefined;
  public logo: string;

  constructor(private _loggerService: LoggerService,
              private breakpointObserver: BreakpointObserver,
              private appService: AppService,
              private _router: Router,
              private _locationStrategy: LocationStrategy) {
    this._loggerService.debug(PageComponent.name, 'le composant a bien été chargé');
    this._loadingPage();
    this._getUrlCurrentPage();
    this._setNavBars();
    this.logo = _locationStrategy.getBaseHref() + 'assets/images/logo_ui_material.png';
  }

  ngOnInit(): void {}

  private _setNavBars(): void {
    this._navbarSubscription$ = this.appService
      .getParams('navbar')
      .subscribe(next => {
        this.navbars = next?.routes;
        this.title   = next?.title
      }, error => {
        this._loggerService.error(PageComponent.name, 'Observer got an error: ' + error);
      });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private _loadingPage(): void {
    this._routerEventSubscription$ = this._router.events
      .subscribe((event) => {
        this.loading = true;
        switch (true) {
          case event instanceof NavigationStart:
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            setTimeout(() => {
              this.loading = false;
            }, 100);
            break;
          }
          default: {
            break;
          }
        }
      });
  }

  private _getUrlCurrentPage(): void {
    this._routerEventSubscription$ = this._router
      .events.subscribe({
        next: event => {
          const navBar: NavBar = {} as NavBar;
          if (event instanceof RouterEvent) {
            this._titleContentTop = event.url.substring(1);
          }
        },
        error : (error) => {
          this._loggerService.error(PageComponent.name, 'Observer got an error: ' + error);
        }
      })
  }

  ngOnDestroy(): void {
      this._navbarSubscription$.unsubscribe();
      this._routerEventSubscription$.unsubscribe();
  }

}
