import { Injectable } from "@angular/core";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import {Business} from "~/models/business.model";


@Injectable()
export class BusinessService {
  private _url = "http://10.0.2.2:3000/business/";

  constructor(private _httpClient: HttpClient) {}

  getBusinesses(): Observable<Business[]> {
    return this._httpClient
      .get<any[]>(this._url)
      .do(data => console.log("All: " + JSON.stringify(data)));
  }
  getBusiness(id: string): Observable<Business> {
    return this._httpClient.get<Business>(`${this._url}${id}`);
  }
  postBusiness(business: Business): Observable<any> {
    return this._httpClient.post(this._url, business);
  }
  putBusiness(business: Business): Observable<any> {
    return this._httpClient.put(`${this._url}${business.id}`, business);
  }
  deleteBusiness(business: Business): Observable<any> {
    return this._httpClient.delete(`${this._url}${business.id}`);
  }
}
