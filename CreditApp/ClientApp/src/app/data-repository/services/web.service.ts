import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ServiceExtensions } from "./service.extensions.component";
import { Observable } from "rxjs/Observable";
import { ICardReport, testUserId } from "app/interfaces/Types";
import * as ons from "onsenui";

@Injectable()
export class WebService {

  private apiUrl = "/api";

  constructor(private http: HttpClient) {
  }


  public async getInfo<T>(requestUserId: string, requestApiKey: string): Promise<T> {
    const apiParams = {
      userId: requestUserId,
      apiKey: requestApiKey
    };
    const options = {
      params: apiParams
    };
    try {
      return this.http.get<T>(`${this.apiUrl}/cardInfo/getCardInfo`, options).toPromise();
    } catch (e) {
      this.alert(e);
    }
  }

  public async reportCardIssue<T>(requestApiKey: string, reportBody: ICardReport): Promise<T> {
    const apiParams = {
      apiKey: requestApiKey
    };
    const options = {
      params: apiParams
    };

    const body = new HttpParams()
      .set("issue", JSON.stringify(reportBody))
      .set("apiKey", requestApiKey);

    try {
      return this.http.post<T>(`${this.apiUrl}/cardControl/postCardIssue`, body, options).toPromise();
    } catch (e) {
      this.alert(e);
    }
  }

  public async turnOnOff<T>(requestUserId: string, requestApiKey: string): Promise<T> {
    const apiParams = {
      userId: requestUserId,
      apiKey: requestApiKey
    };
    const options = {
      params: apiParams
    };
    try {
      return this.http.post<T>(`${this.apiUrl}/cardControl/enableOnOff`, null, options).toPromise();
    } catch (e) {
      this.alert(e);
    }
  }

  alert(e: string) {
    ons.notification.alert(e);
  }

}
