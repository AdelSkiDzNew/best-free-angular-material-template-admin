import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageComponent} from "./page.component";

export declare const enum Route {
  Dashboard = 'dashboard'
}

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children : [
      {
        path: `${Route.Dashboard}`,
        loadChildren: () => import('../@pages/dashboard/dashboard.module')
          .then(dashboard => dashboard.DashboardModule),
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {
}
