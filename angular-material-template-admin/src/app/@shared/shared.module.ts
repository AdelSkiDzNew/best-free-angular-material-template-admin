import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IpMaterialModule} from "./material/ip-material.module";
import {LoadingComponent} from "./components/loading/loading.component";

@NgModule({
  declarations: [
    SharedModule.SHARED_COMPONENTS,
    SharedModule.SHARED_PIPES,
    SharedModule.SHARED_DIRECTIVES,
  ],
  imports: [
    CommonModule,
    IpMaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule.SHARED_COMPONENTS,
    SharedModule.SHARED_PIPES,
    SharedModule.SHARED_DIRECTIVES,
    IpMaterialModule
  ],
  providers: []
})
export class SharedModule {

  static readonly SHARED_COMPONENTS = [
    LoadingComponent
  ];
  static readonly SHARED_DIRECTIVES = [

  ];
  static readonly SHARED_PIPES = [

  ];
}
