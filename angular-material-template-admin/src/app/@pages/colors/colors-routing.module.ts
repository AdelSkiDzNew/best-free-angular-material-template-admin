import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ColorsComponent} from "./colors.component";

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorsRoutingModule {
}
