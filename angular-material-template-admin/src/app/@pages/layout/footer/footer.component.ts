import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../../../@core/services/logger.service";
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  username: string = "inconnu"
  uiVersion: string = environment.version;

  constructor(private _loggerService: LoggerService) {
    this._loggerService.debug(FooterComponent.name, 'le composant a bien été chargé');
  }

  ngOnInit(): void {}

}
