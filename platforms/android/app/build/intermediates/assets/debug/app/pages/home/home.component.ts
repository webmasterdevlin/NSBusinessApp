import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import * as dialogs from "ui/dialogs";
import "rxjs/add/operator/do";
import {Observable} from "rxjs/Observable";
import {Business} from "~/models/business.model";
import {BusinessService} from "~/services/business.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit{
    title = "Home Page";
    BusinessList: Business[] = [];

    constructor(
        private router: Router,
        private _businessService: BusinessService) {

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

    ngOnInit(): void {
        this.getBusinesses();
    }

    private getBusinesses() {
        this._businessService
            .getBusinesses()
            .subscribe(data => this.BusinessList = data);
    }
}
