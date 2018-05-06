import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import * as dialogs from "ui/dialogs";
import "rxjs/add/operator/do";
import {Observable} from "rxjs/Observable";
import {Business} from "~/models/business.model";
import {BusinessService} from "~/services/business.service";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    title = "Home Page";
    BusinessList: Business[] = [];

    constructor(
        private router: Router,
        private _businessService: BusinessService) {

    }

    send(id) {
        alert(id);
    }

    ngOnInit(): void {
        this.getBusinesses();
    }

    onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById<View>("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    delete(args: ListViewEventData) {
        let business = <Business>args.object.bindingContext;
        this._businessService.deleteBusiness(business)
            .subscribe(() => {
                let index = this.BusinessList.indexOf(business);
                this.BusinessList.splice(index, 1);
            });
    }
    public getBusinesses() {
        this._businessService
            .getBusinesses()
            .subscribe(data => this.BusinessList = data);
    }
}
