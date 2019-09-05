import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ApiResult } from "app/interfaces/ApiResult";
import { ICardHolder, ICard } from "app/interfaces/Types";

export class ServiceExtensions {

    static getAppPath(): string {
        return `${window.location}`;
    }

    static createCardHolderMock(): ICardHolder {
        return {
            cards: this.createCardsMock(),
            cardHolder: "Kemba Walker"
        };
    }

    static createCardsMock(): Array<ICard> {
        return [{
            cardName: "Rewards Card",
            cardId: "0001",
            maskCardNumber: "xx0455",
        }, {
            cardName: "Business Card",
            cardId: "9999",
            maskCardNumber: "xx8712"
        }, {
            cardName: "Amazon Card",
            cardId: "2341",
            maskCardNumber: "xx9623"
        }];
    }
}
