import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {Route} from "./@pages/page-routing.module";


export const routes: Routes = [
  {
    path: '',
    redirectTo: `${Route.Dashboard}`,
    pathMatch: 'full'
  }
];

const config: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'enabled',
  enableTracing: false, // true = activation for see debug logs routage betwwen pages :)
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
