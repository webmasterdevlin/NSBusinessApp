import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {HomeComponent} from "~/pages/home/home.component";
import {NativeScriptFormsModule, NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {BusinessService} from "~/services/business.service";
import {LoginComponent} from "~/pages/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NewComponent} from "~/pages/new/new.component";
import {EditComponent} from "~/pages/edit/edit.component";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";


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
        NativeScriptModule,
        NativeScriptRouterModule,
        RouterModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NewComponent,
        EditComponent
    ],
    providers: [
        BusinessService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
