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
    HomeComponent.prototype.send = function (id) {
        alert(id);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getBusinesses();
    };
    HomeComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    HomeComponent.prototype.delete = function (args) {
        var _this = this;
        var business = args.object.bindingContext;
        this._businessService.deleteBusiness(business)
            .subscribe(function () {
            var index = _this.BusinessList.indexOf(business);
            _this.BusinessList.splice(index, 1);
        });
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
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            business_service_1.BusinessService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUM7QUFFdkMsZ0NBQThCO0FBRzlCLGdFQUE0RDtBQVU1RDtJQUlJLHVCQUNZLE1BQWMsRUFDZCxnQkFBaUM7UUFEakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFMN0MsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztJQU05QixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLEVBQUU7UUFDSCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLElBQXVCO1FBQ3RDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBTyxhQUFhLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sSUFBdUI7UUFBOUIsaUJBT0M7UUFORyxJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN6QyxTQUFTLENBQUM7WUFDUCxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00scUNBQWEsR0FBcEI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxnQkFBZ0I7YUFDaEIsYUFBYSxFQUFFO2FBQ2YsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBdkNRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBTXNCLGVBQU07WUFDSSxrQ0FBZTtPQU5wQyxhQUFhLENBd0N6QjtJQUFELG9CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0J1c2luZXNzfSBmcm9tIFwifi9tb2RlbHMvYnVzaW5lc3MubW9kZWxcIjtcclxuaW1wb3J0IHtCdXNpbmVzc1NlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2VzL2J1c2luZXNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdGl0bGUgPSBcIkhvbWUgUGFnZVwiO1xyXG4gICAgQnVzaW5lc3NMaXN0OiBCdXNpbmVzc1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9idXNpbmVzc1NlcnZpY2U6IEJ1c2luZXNzU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGlkKSB7XHJcbiAgICAgICAgYWxlcnQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0QnVzaW5lc3NlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgICAgICB2YXIgc3dpcGVWaWV3ID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PihcImRlbGV0ZS12aWV3XCIpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gMDtcclxuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgYnVzaW5lc3MgPSA8QnVzaW5lc3M+YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5fYnVzaW5lc3NTZXJ2aWNlLmRlbGV0ZUJ1c2luZXNzKGJ1c2luZXNzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuQnVzaW5lc3NMaXN0LmluZGV4T2YoYnVzaW5lc3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CdXNpbmVzc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QnVzaW5lc3NlcygpIHtcclxuICAgICAgICB0aGlzLl9idXNpbmVzc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldEJ1c2luZXNzZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5CdXNpbmVzc0xpc3QgPSBkYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=