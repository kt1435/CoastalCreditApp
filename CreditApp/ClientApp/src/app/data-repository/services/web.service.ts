import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServiceExtensions } from "./service.extensions.component";
import { Observable } from "rxjs/Observable";
import { ICardReport, testUserId } from "app/interfaces/Types";

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
    return this.http.get<T>(`${this.apiUrl}/cardInfo/getCardInfo`, options).toPromise();
  }

  public async reportCardIssue<T>(requestApiKey: string, reportBody: ICardReport): Promise<T> {
    const apiParams = {
      apiKey: requestApiKey
    };
    const options = {
      params: apiParams
    };
    const body = {
      issue: reportBody
    };
    return this.http.post<T>(`${this.apiUrl}/cardControl/postCardIssue`, JSON.stringify(body), options).toPromise();
  }

  public async turnOnOff<T>(requestUserId: string, requestApiKey: string): Promise<T> {
    const apiParams = {
      userId: requestUserId,
      apiKey: requestApiKey
    };
    const options = {
      params: apiParams
    };
    return this.http.post<T>(`${this.apiUrl}/cardControl/enableOnOff`, null, options).toPromise();
  }

}
