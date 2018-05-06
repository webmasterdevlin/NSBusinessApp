import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BusinessService } from "~/services/business.service";
import { Business } from "~/models/business.model";
import { RouterExtensions } from "nativescript-angular";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "Edit",
  moduleId: module.id,
  templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit {
  business: Business;
  name: string;
  description: string;
  head: string;
  code: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _routerExtensions: RouterExtensions,
    private _businessService: BusinessService
  ) {}

  ngOnInit() {
    const id = this._activatedRoute.snapshot.params["id"];
    this.getBusiness(id);
  }

  getBusiness(id: string) {
    this._businessService.getBusiness(id).subscribe(data => {
      this.business = data;
    });
  }

  onUpdate() {
    this._businessService.putBusiness(this.business)
        .subscribe();
  }
  onDelete() {

    let result: boolean = false;
    dialogs.confirm("Sure you want to delete this?").then(c => {
      result = c;
      console.log("Result: ", c);
      if (result === true) {
        this._businessService.deleteBusiness(this.business)
            .subscribe();
        this._routerExtensions.back();
      }
    });
  }
}
