import {NgModule} from '@angular/core';
import {SharedModule} from "../../@shared/shared.module";
import {FooterComponent} from "./footer/footer.component";
import {NavComponent} from "./nav/nav.component";
import {CommonModule} from "@angular/common";
import {ContentTopComponent} from "./content-top/content-top.component";
import {ContentTopValueComponent} from "./content-top/content-top-value.component";


@NgModule({
  declarations: [FooterComponent, NavComponent, ContentTopComponent, ContentTopValueComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ContentTopComponent
  ]
})
export class LayoutModule { }
