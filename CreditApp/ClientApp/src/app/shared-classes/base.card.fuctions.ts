import { ICardHolder, ICard } from "app/interfaces/Types";
import { DataRepository } from "app/data-repository/data.repository";
import { OnInit } from "@angular/core";
import * as ons from "onsenui";


export class BaseCardFunctions implements OnInit {

    protected currentCardHolder: ICardHolder;
    protected currentCard: string;

    constructor(protected dataRepository: DataRepository) {
    }

    get showCardInfo(): boolean {
        return this.currentCard != null;
    }

    get currentSelectedCard(): ICard {
        const returnCard = this.currentCardHolder.cards.filter(item => item.cardId === this.currentCard)[0];

        return returnCard || {} as ICard;
    }

    // Should refactor out into common interface
    protected get getCards(): Array<ICard> {
        return (this.currentCardHolder || {} as ICardHolder).cards;
    }

    toast(msg = "Report issue acknowledged") {
        ons.notification.toast(msg, {timeout: 2000});
      }

    ngOnInit(): void {
        this.currentCardHolder = this.dataRepository.getCardInfo(true);
    }

}
