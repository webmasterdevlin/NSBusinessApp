"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var BusinessService = /** @class */ (function () {
    function BusinessService(_httpClient) {
        this._httpClient = _httpClient;
        this._url = "http://10.0.2.2:3000/business/";
    }
    BusinessService.prototype.getBusinesses = function () {
        return this._httpClient
            .get(this._url)
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); });
    };
    BusinessService.prototype.getBusiness = function (id) {
        return this._httpClient.get("" + this._url + id);
    };
    BusinessService.prototype.postBusiness = function (business) {
        return this._httpClient.post(this._url, business);
    };
    BusinessService.prototype.putBusiness = function (business) {
        return this._httpClient.put("" + this._url + business.id, business);
    };
    BusinessService.prototype.deleteBusiness = function (business) {
        return this._httpClient.delete("" + this._url + business.id);
    };
    BusinessService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BusinessService);
    return BusinessService;
}());
exports.BusinessService = BusinessService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1c2luZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBSThCO0FBRTlCLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFLOUI7SUFHRSx5QkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFGbkMsU0FBSSxHQUFHLGdDQUFnQyxDQUFDO0lBRUYsQ0FBQztJQUUvQyx1Q0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixHQUFHLENBQVEsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQixFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBVyxLQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELHNDQUFZLEdBQVosVUFBYSxRQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELHFDQUFXLEdBQVgsVUFBWSxRQUFrQjtRQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsRUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCx3Q0FBYyxHQUFkLFVBQWUsUUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFyQlUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUlzQixpQkFBVTtPQUhoQyxlQUFlLENBc0IzQjtJQUFELHNCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2VcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHtCdXNpbmVzc30gZnJvbSBcIn4vbW9kZWxzL2J1c2luZXNzLm1vZGVsXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91cmwgPSBcImh0dHA6Ly8xMC4wLjIuMjozMDAwL2J1c2luZXNzL1wiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRCdXNpbmVzc2VzKCk6IE9ic2VydmFibGU8QnVzaW5lc3NbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnRcclxuICAgICAgLmdldDxhbnlbXT4odGhpcy5fdXJsKVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhcIkFsbDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpO1xyXG4gIH1cclxuICBnZXRCdXNpbmVzcyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxCdXNpbmVzcz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0PEJ1c2luZXNzPihgJHt0aGlzLl91cmx9JHtpZH1gKTtcclxuICB9XHJcbiAgcG9zdEJ1c2luZXNzKGJ1c2luZXNzOiBCdXNpbmVzcyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5wb3N0KHRoaXMuX3VybCwgYnVzaW5lc3MpO1xyXG4gIH1cclxuICBwdXRCdXNpbmVzcyhidXNpbmVzczogQnVzaW5lc3MpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQucHV0KGAke3RoaXMuX3VybH0ke2J1c2luZXNzLmlkfWAsIGJ1c2luZXNzKTtcclxuICB9XHJcbiAgZGVsZXRlQnVzaW5lc3MoYnVzaW5lc3M6IEJ1c2luZXNzKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmRlbGV0ZShgJHt0aGlzLl91cmx9JHtidXNpbmVzcy5pZH1gKTtcclxuICB9XHJcbn1cclxuIl19