import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageComponent} from "./page.component";

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    /*children : [
      {
        path: `${IpFichierRoutingPath.pathToModule}`,
        loadChildren: () => import('../@pages/nameOfModule/module')
          .then(module => module.MyModule),
      }
    ]*/
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {
}
