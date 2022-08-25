import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../@shared/shared.module";
import {IconsComponent} from "./icons.component";
import {IconsRoutingModule} from "./icons-routing.module";


@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    SharedModule,
    IconsRoutingModule
  ],
  exports: []
})
export class IconsModule {
}
