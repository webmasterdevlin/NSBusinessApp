"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var business_model_1 = require("~/models/business.model");
var business_service_1 = require("~/services/business.service");
var NewComponent = /** @class */ (function () {
    function NewComponent(_businessService) {
        this._businessService = _businessService;
    }
    NewComponent.prototype.ngOnInit = function () { };
    NewComponent.prototype.OnSave = function () {
        var company = new business_model_1.Business();
        company.name = this.name;
        company.description = this.description;
        company.head = this.head;
        company.code = this.code;
        this._businessService.postBusiness(company)
            .subscribe();
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: "New",
            moduleId: module.id,
            templateUrl: "./new.component.html"
        }),
        __metadata("design:paramtypes", [business_service_1.BusinessService])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQWlEO0FBQ2pELGdFQUE0RDtBQU81RDtJQU9FLHNCQUNZLGdCQUFpQztRQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQ3RDLENBQUM7SUFDUiwrQkFBUSxHQUFSLGNBQVksQ0FBQztJQUViLDZCQUFNLEdBQU47UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHlCQUFRLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7YUFDdEMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXBCVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7eUNBUzhCLGtDQUFlO09BUmxDLFlBQVksQ0FxQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCdXNpbmVzc30gZnJvbSBcIn4vbW9kZWxzL2J1c2luZXNzLm1vZGVsXCI7XHJcbmltcG9ydCB7QnVzaW5lc3NTZXJ2aWNlfSBmcm9tIFwifi9zZXJ2aWNlcy9idXNpbmVzcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJOZXdcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbmV3LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGhlYWQ6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIF9idXNpbmVzc1NlcnZpY2U6IEJ1c2luZXNzU2VydmljZVxyXG4gICAgICApIHt9XHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBPblNhdmUoKSB7XHJcbiAgICB2YXIgY29tcGFueSA9IG5ldyBCdXNpbmVzcygpO1xyXG4gICAgY29tcGFueS5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgY29tcGFueS5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICBjb21wYW55LmhlYWQgPSB0aGlzLmhlYWQ7XHJcbiAgICBjb21wYW55LmNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICB0aGlzLl9idXNpbmVzc1NlcnZpY2UucG9zdEJ1c2luZXNzKGNvbXBhbnkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=