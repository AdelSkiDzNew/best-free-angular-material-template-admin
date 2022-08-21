import {Component, OnInit} from "@angular/core";
import {AppService} from "../../../@core/services/app.service";

@Component({
  template: ''
})
export class ContentTopValueComponent implements OnInit{

  _valueContentTopArray: any = [];

  constructor(private _appService:AppService) {}

  ngOnInit(): void {
    this._routeEvent();
  }

  private _routeEvent(): void {
    this._appService.routeEvent({ev: 'isActived', value:this.valueContentTopArray()});
  }

  protected valueContentTopArray(): any {
    return this._valueContentTopArray;
  }



}
