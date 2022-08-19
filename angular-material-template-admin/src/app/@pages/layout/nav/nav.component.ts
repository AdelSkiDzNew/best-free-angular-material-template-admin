import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../../../@core/services/logger.service";
import {NavBar} from "../../../@core/models/models";
import {AppService} from "../../../@core/services/app.service";
import {Title} from "@angular/platform-browser";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  @Input() navbars: any;

  constructor(private _router: Router,
              private _loggerService: LoggerService,
              private appService: AppService) {
    this._loggerService.debug(NavComponent.name, 'le composant a bien été chargé');
  }

  ngOnInit(): void {}

  redirect(item: NavBar) {
    this.selectItem(item);
    this._router.navigate([`${item.path}`]);
  }

  selectItem(item: any) {
    //this.appService.routeEvent({e:Title});
  }

}
