import {NgModule} from '@angular/core';
import {SharedModule} from "../../@shared/shared.module";
import {FooterComponent} from "./footer/footer.component";
import {NavComponent} from "./nav/nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ContentTopComponent} from "./content-top/content-top.component";


@NgModule({
  declarations: [FooterComponent, NavComponent, ContentTopComponent],
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
