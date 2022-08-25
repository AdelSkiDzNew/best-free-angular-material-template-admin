import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {IconsComponent} from "./icons.component";

const routes: Routes = [
  {
    path: '',
    component: IconsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsRoutingModule {
}
