"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("~/pages/home/home.component");
var nativescript_angular_1 = require("nativescript-angular");
var http_client_1 = require("nativescript-angular/http-client");
var business_service_1 = require("~/services/business.service");
var login_component_1 = require("~/pages/login/login.component");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var new_component_1 = require("~/pages/new/new.component");
var edit_component_1 = require("~/pages/edit/edit.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                nativescript_angular_1.NativeScriptFormsModule,
                http_1.HttpClientModule,
                http_client_1.NativeScriptHttpClientModule,
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule,
                router_1.RouterModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                new_component_1.NewComponent,
                edit_component_1.EditComponent
            ],
            providers: [
                business_service_1.BusinessService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLHdDQUEyQztBQUMzQywyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCw2REFBdUY7QUFDdkYsZ0VBQThFO0FBQzlFLGdFQUE0RDtBQUM1RCxpRUFBNkQ7QUFDN0QsNkNBQXNEO0FBQ3RELDBDQUE2QztBQUM3QywyREFBdUQ7QUFDdkQsOERBQTBEO0FBaUMxRDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsbUJBQVc7Z0JBQ1gsOENBQXVCO2dCQUN2Qix1QkFBZ0I7Z0JBQ2hCLDBDQUE0QjtnQkFDNUIsd0NBQWtCO2dCQUNsQiwrQ0FBd0I7Z0JBQ3hCLHFCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osOEJBQWE7YUFDaEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCJ+L3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHtCdXNpbmVzc1NlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2VzL2J1c2luZXNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIn4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TmV3Q29tcG9uZW50fSBmcm9tIFwifi9wYWdlcy9uZXcvbmV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0VkaXRDb21wb25lbnR9IGZyb20gXCJ+L3BhZ2VzL2VkaXQvZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBOZXdDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJ1c2luZXNzU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==