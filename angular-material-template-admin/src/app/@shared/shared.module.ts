import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingComponent} from "./components/loading/loading.component";
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [
    SharedModule.SHARED_COMPONENTS,
    SharedModule.SHARED_PIPES,
    SharedModule.SHARED_DIRECTIVES,
  ],
  imports: [
    CommonModule,
    MaterialModule
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
    MaterialModule
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
