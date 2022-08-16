import {NgModule} from '@angular/core';
import {PageRoutingModule} from "./page-routing.module";
import {PageComponent} from "./page.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../@shared/shared.module";


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule
  ],
  exports: []
})
export class PageModule {
}
