import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {LoggerService} from "./logger.service";
import {LocationStrategy} from "@angular/common";
import {Title} from "../models/models";

@Injectable({providedIn :"root"})
export class AppService {

  private baseHref: string;
  private dataSource = new Subject<any>();
  public path: string | undefined;

  constructor(private _logger:LoggerService, private _httpClient: HttpClient, private _locationStrategy:LocationStrategy) {
    this.baseHref = _locationStrategy.getBaseHref();
  }

  data$ = this.dataSource.asObservable();

  public routeEvent(title: Title) {
    this.dataSource.next(title);
  }


  getParams(paramName:string): Observable<any> {
    return this._httpClient.get(this.baseHref + 'assets/json/app.json')
      .pipe(
        map((json: any) => {
          switch (paramName) {
            case 'navbar':
              return json.navbar;
            default:
              this._logger.error(AppService.name, "IllegalArgumentException : ", paramName);
          }
        })
      );
  }


}
