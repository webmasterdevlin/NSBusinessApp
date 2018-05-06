import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {HomeComponent} from "~/pages/home/home.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {BusinessService} from "~/services/business.service";
import {LoginComponent} from "~/pages/login/login.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        FormsModule,
        NativeScriptFormsModule,
        HttpClientModule,
        NativeScriptHttpClientModule,
        NativeScriptModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        BusinessService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
