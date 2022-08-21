import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../@shared/shared.module";
import {ColorsComponent} from "./colors.component";
import {ColorsRoutingModule} from "./colors-routing.module";


@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ColorsRoutingModule
  ],
  exports: []
})
export class ColorsModule {
}
