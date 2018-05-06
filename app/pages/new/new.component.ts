import { Component, OnInit } from "@angular/core";
import {Business} from "~/models/business.model";
import {BusinessService} from "~/services/business.service";

@Component({
  selector: "New",
  moduleId: module.id,
  templateUrl: "./new.component.html"
})
export class NewComponent implements OnInit {

  name: string;
  description: string;
  head: string;
  code: string;

  constructor(
      private _businessService: BusinessService
      ) {}
  ngOnInit() {}

  OnSave() {
    var company = new Business();
    company.name = this.name;
    company.description = this.description;
    company.head = this.head;
    company.code = this.code;
    this._businessService.postBusiness(company)
        .subscribe();
  }
}
