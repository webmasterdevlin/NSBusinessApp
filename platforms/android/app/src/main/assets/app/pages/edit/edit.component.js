"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var business_service_1 = require("~/services/business.service");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var EditComponent = /** @class */ (function () {
    function EditComponent(_activatedRoute, _routerExtensions, _businessService) {
        this._activatedRoute = _activatedRoute;
        this._routerExtensions = _routerExtensions;
        this._businessService = _businessService;
    }
    EditComponent.prototype.ngOnInit = function () {
        var id = this._activatedRoute.snapshot.params["id"];
        this.getBusiness(id);
    };
    EditComponent.prototype.getBusiness = function (id) {
        var _this = this;
        this._businessService.getBusiness(id).subscribe(function (data) {
            _this.business = data;
        });
    };
    EditComponent.prototype.onUpdate = function () {
        this._businessService.putBusiness(this.business)
            .subscribe();
    };
    EditComponent.prototype.onDelete = function () {
        var _this = this;
        var result = false;
        dialogs.confirm("Sure you want to delete this?").then(function (c) {
            result = c;
            console.log("Result: ", c);
            if (result === true) {
                _this._businessService.deleteBusiness(_this.business)
                    .subscribe();
                _this._routerExtensions.back();
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: "Edit",
            moduleId: module.id,
            templateUrl: "./edit.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            nativescript_angular_1.RouterExtensions,
            business_service_1.BusinessService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsZ0VBQThEO0FBRTlELDZEQUF3RDtBQUN4RCxvQ0FBc0M7QUFPdEM7SUFNRSx1QkFDVSxlQUErQixFQUMvQixpQkFBbUMsRUFDbkMsZ0JBQWlDO1FBRmpDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7SUFDeEMsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFDRSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFBdEIsaUJBSUM7UUFIQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDbEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMzQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBVkMsSUFBSSxNQUFNLEdBQVksS0FBSyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ3JELE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztxQkFDOUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXZDVSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUNyQyxDQUFDO3lDQVEyQix1QkFBYztZQUNaLHVDQUFnQjtZQUNqQixrQ0FBZTtPQVRoQyxhQUFhLENBd0N6QjtJQUFELG9CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdXNpbmVzc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9idXNpbmVzcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1c2luZXNzIH0gZnJvbSBcIn4vbW9kZWxzL2J1c2luZXNzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiRWRpdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9lZGl0LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGJ1c2luZXNzOiBCdXNpbmVzcztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBoZWFkOiBzdHJpbmc7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgX2J1c2luZXNzU2VydmljZTogQnVzaW5lc3NTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICB0aGlzLmdldEJ1c2luZXNzKGlkKTtcclxuICB9XHJcblxyXG4gIGdldEJ1c2luZXNzKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2J1c2luZXNzU2VydmljZS5nZXRCdXNpbmVzcyhpZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmJ1c2luZXNzID0gZGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25VcGRhdGUoKSB7XHJcbiAgICB0aGlzLl9idXNpbmVzc1NlcnZpY2UucHV0QnVzaW5lc3ModGhpcy5idXNpbmVzcylcclxuICAgICAgICAuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG4gIG9uRGVsZXRlKCkge1xyXG5cclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRpYWxvZ3MuY29uZmlybShcIlN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXM/XCIpLnRoZW4oYyA9PiB7XHJcbiAgICAgIHJlc3VsdCA9IGM7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgYyk7XHJcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLl9idXNpbmVzc1NlcnZpY2UuZGVsZXRlQnVzaW5lc3ModGhpcy5idXNpbmVzcylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19