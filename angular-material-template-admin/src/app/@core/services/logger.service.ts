/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import {LoggerService} from "../../core/services/Logger.service";
 *
 * injected this service with constructor end set value of component
 * Example :
 constructor( private _log:LoggerService)
 {
      _log.setComponentName('AdminComponent');
  }
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */

/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
import {Injectable} from "@angular/core";

export enum LogLevel {
  Off = 0,
  Error,
  Warning,
  Info,
  Debug,
}

/**
 * Log output handler function.
 */
export type LogOutput = (source: string, level: LogLevel, ...objects: any[]) => void;

@Injectable()
export class LoggerService {

  /**
   * Current logging level.
   * Set it to LogLevel.Off to disable logs completely.
   */
  static level = LogLevel.Debug;

  private _componentName ?: string;

  /**
   * Additional log outputs.
   */
  static outputs: LogOutput[] = [];

  /**
   * Enables production mode.
   * Sets logging level to LogLevel.Warning.
   */
  static enableLoggingProductionMode() {
    LoggerService.level = LogLevel.Warning;
  }

  /**
   * Logs messages or objects  with the debug level.
   * Works the same as console.log().
   */
  debug(componentName?:string,...objects: any[]) {
    this.setComponentName(componentName != undefined ? componentName :'');
    this.log(console.log, LogLevel.Debug, objects);
  }

  /**
   * Logs messages or objects  with the info level.
   * Works the same as console.log().
   */
  info(componentName?:string, ...objects: any[]) {
    this.setComponentName(componentName != undefined ? componentName :'');
    this.log(console.info, LogLevel.Info, objects);
  }

  /**
   * Logs messages or objects  with the warning level.
   * Works the same as console.log().
   */
  warn(componentName?:string, ...objects: any[]) {
    this.setComponentName(componentName != undefined ? componentName :'');
    this.log(console.warn, LogLevel.Warning, objects);
  }

  /**
   * Logs messages or objects  with the error level.
   * Works the same as console.log().
   */
  error(componentName?:string, ...objects: any[]) {
    this.setComponentName(componentName != undefined ? componentName :'');
    this.log(console.error, LogLevel.Error, objects);
  }

  getSetviceName() {
    return (<any>this).constructor.name;
  }

  getComponentName(): string {
    return <string> this._componentName;
  }

  setComponentName(value: string) {
    return (<any>this)._componentName = value;
  }


  private log(func: Function, level: LogLevel, objects: any[]) {
    if (level > LoggerService.level) {
      return;
    }
    const log = this._componentName ? ['[' + new Date() + ' '  + this._componentName + ']'].concat(objects) : objects;
    func.apply(console, log);
    LoggerService.outputs.forEach((output) => {
      // @ts-ignore
      return output.apply(output, [this._componentName, level].concat(objects));
    });
  }
}
