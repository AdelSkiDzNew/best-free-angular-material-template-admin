import {Component, Input, OnInit} from '@angular/core';
import {LoggerService} from "../../../@core/services/logger.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input()
  loading: boolean  = false ;

  constructor(private _loggerService: LoggerService) {
    this._loggerService.debug(LoadingComponent.name);
  }

  ngOnInit(): void{}
}
