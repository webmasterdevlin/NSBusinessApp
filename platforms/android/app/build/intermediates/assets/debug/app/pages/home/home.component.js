"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/do");
var business_service_1 = require("~/services/business.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _businessService) {
        this.router = router;
        this._businessService = _businessService;
        this.title = "Home Page";
        this.BusinessList = [];
    }
    // onNavigate(): void {
    //     let result: boolean = false;
    //     dialogs.confirm("Sure?")
    //         .then(c => {
    //             result = c;
    //             console.log("Result: ", c);
    //             if (result === true) {
    //                 this.router.navigate(["contact"]);
    //             }
    //         });
    // }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBusinesses();
    };
    HomeComponent.prototype.getBusinesses = function () {
        var _this = this;
        this._businessService
            .getBusinesses()
            .subscribe(function (data) { return _this.BusinessList = data; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            business_service_1.BusinessService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUM7QUFFdkMsZ0NBQThCO0FBRzlCLGdFQUE0RDtBQU81RDtJQUlJLHVCQUNZLE1BQWMsRUFDZCxnQkFBaUM7UUFEakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFMN0MsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztJQU05QixDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMscUNBQXFDO0lBQ3JDLHFEQUFxRDtJQUNyRCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLElBQUk7SUFFSixnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGdCQUFnQjthQUNoQixhQUFhLEVBQUU7YUFDZixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUE5QlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FNc0IsZUFBTTtZQUNJLGtDQUFlO09BTnBDLGFBQWEsQ0ErQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7QnVzaW5lc3N9IGZyb20gXCJ+L21vZGVscy9idXNpbmVzcy5tb2RlbFwiO1xyXG5pbXBvcnQge0J1c2luZXNzU2VydmljZX0gZnJvbSBcIn4vc2VydmljZXMvYnVzaW5lc3Muc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICB0aXRsZSA9IFwiSG9tZSBQYWdlXCI7XHJcbiAgICBCdXNpbmVzc0xpc3Q6IEJ1c2luZXNzW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2J1c2luZXNzU2VydmljZTogQnVzaW5lc3NTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTmF2aWdhdGUoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGRpYWxvZ3MuY29uZmlybShcIlN1cmU/XCIpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKGMgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gYztcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgYyk7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29udGFjdFwiXSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0QnVzaW5lc3NlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVzaW5lc3NlcygpIHtcclxuICAgICAgICB0aGlzLl9idXNpbmVzc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldEJ1c2luZXNzZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5CdXNpbmVzc0xpc3QgPSBkYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=