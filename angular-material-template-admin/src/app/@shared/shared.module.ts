import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IpMaterialModule} from "./material/ip-material.module";

@NgModule({
  declarations: [
    SharedModule.IP_SHARED_COMPONENTS,
    SharedModule.IP_SHARED_PIPES,
    SharedModule.IP_SHARED_DIRECTIVES,
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
    SharedModule.IP_SHARED_COMPONENTS,
    SharedModule.IP_SHARED_PIPES,
    SharedModule.IP_SHARED_DIRECTIVES,
    IpMaterialModule
  ],
  providers: []
})
export class SharedModule {

  static readonly IP_SHARED_COMPONENTS = [

  ];
  static readonly IP_SHARED_DIRECTIVES = [

  ];
  static readonly IP_SHARED_PIPES = [

  ];
}
