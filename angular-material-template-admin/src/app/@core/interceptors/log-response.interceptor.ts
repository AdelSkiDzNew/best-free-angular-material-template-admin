import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {LoggerService} from "../services/logger.service";

const pretty_print_json = (json: any) => {
  if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match: string) {
    return match;
  });
};

@Injectable()
export class LogResponseInterceptor implements HttpInterceptor {

  constructor(private _loggerService: LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loggerService.debug(LogResponseInterceptor.name,`request: `,JSON.stringify({url: `${req.url}`, method: `${req.method}`, responseType: `${req.responseType}`}));
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            this._loggerService.debug(LogResponseInterceptor.name, `[` + req.url+`]`, ` >> response: `,`${pretty_print_json(event.body)}`)
          }
        })
      )
  }


}
