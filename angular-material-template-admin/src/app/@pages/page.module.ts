import {NgModule} from '@angular/core';
import {PageRoutingModule} from "./page-routing.module";
import {PageComponent} from "./page.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../@shared/shared.module";
import {LayoutModule} from "./layout/layout.module";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    PageRoutingModule,
    LayoutModule
  ],
  exports: []
})
export class PageModule {
}
