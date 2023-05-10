import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule }from '@angular/common/http';
import { RxjsOperatorspracComponent } from './rxjs-operatorsprac/rxjs-operatorsprac.component';
import { PipepracComponent } from './pipeprac/pipeprac.component';
import { ReactiveformvalidComponent } from './reactiveformvalid/reactiveformvalid.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { TemplatecrudComponent } from './templatecrud/templatecrud.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { CustomDirectiveDirective } from './customdirective/custom-directive.directive';
import { DirectiveComponent } from './directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    CrudComponent,
    RxjsOperatorspracComponent,
    PipepracComponent,
    ReactiveformvalidComponent,
    ServiceCompComponent,
    TemplatecrudComponent,
    TemplatevalidationComponent,
    CustomDirectiveDirective,
    DirectiveComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
