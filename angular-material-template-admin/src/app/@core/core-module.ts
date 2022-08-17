import {ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import {LoggerService} from "./services/logger.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DatePipe, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {LogResponseInterceptor} from "./interceptors/log-response.interceptor";
import {AppService} from "./services/app.service";

export const providers = [LoggerService, LogResponseInterceptor, DatePipe, AppService];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        providers,
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true},
      ]
    };
  }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
