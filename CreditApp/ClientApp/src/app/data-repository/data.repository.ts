import { Injectable, OnInit } from "ngx-onsenui";
import { ICardHolder, testUserId, testApiKey, ICardReport } from "app/interfaces/Types";
import { WebService } from "./services/web.service";
import { ServiceExtensions } from "./services/service.extensions.component";

@Injectable()

export class DataRepository implements OnInit {

    private cardHolderInfo: ICardHolder;

    constructor(private service: WebService) {
    }

    public getCardInfo<T>(isMocked = false): any {
        return isMocked ? ServiceExtensions.createCardHolderMock() : this.service.getInfo(testUserId, testApiKey);
    }

    public toggleOnOff(): Promise<boolean> {
        return this.service.turnOnOff(testUserId, testApiKey);
    }

    public reportIssue(reportBody: ICardReport): Promise<boolean> {
        return this.service.reportCardIssue(testApiKey, reportBody);
    }

    get cardHolder(): ICardHolder {
        return this.cardHolderInfo;
    }

    ngOnInit(): void {
        this.cardHolderInfo = this.getCardInfo(true);
    }

}
