import { Component, OnInit } from "@angular/core";
import { DataRepository } from "app/data-repository/data.repository";
import { ICardHolder, ICard } from "app/interfaces/Types";
import * as ons from "onsenui";
import { BaseCardFunctions } from "app/shared-classes/base.card.fuctions";

@Component({
  selector: "app-enable-card",
  templateUrl: "./enable.card.component.html"
})
export class EnableCardComponent extends BaseCardFunctions {

  private selectOnOff = false;
  private isLoading = false;

  constructor(dataRepository: DataRepository) {
    super(dataRepository);
  }

  public handleToggleSwitch(card: ICard) {
    this.isLoading = true;
    this.dataRepository.toggleOnOff().then(data => {
      this.selectOnOff = !this.selectOnOff;
      this.isLoading = false;
      this.toast(`${card.cardName} finished toggling`);
    })
    .catch(error => this.isLoading = false);

    card.isOn = !card.isOn;
  }
}
