import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../@shared/shared.module";
import {TypographyComponent} from "./typography.component";
import {TypographyRoutingModule} from "./typography-routing.module";


@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    SharedModule,
    TypographyRoutingModule
  ],
  exports: []
})
export class TypographyModule {
}
