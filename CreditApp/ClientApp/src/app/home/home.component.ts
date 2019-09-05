import { Component, OnInit, ViewChild } from "@angular/core";
import { ICardHolder, ICard } from "app/interfaces/Types";
import { ServiceExtensions } from "app/data-repository/services/service.extensions.component";
import { DataRepository } from "app/data-repository/data.repository";
import { BaseCardFunctions } from "app/shared-classes/base.card.fuctions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent extends BaseCardFunctions {

  constructor(dataRepository: DataRepository) {
    super(dataRepository);
  }

}
