import { Component } from "@angular/core";
import { cardReportStatus, statusArray, ICardReport, ICardHolder, ICard } from "app/interfaces/Types";
import { DataRepository } from "app/data-repository/data.repository";
import { DomSanitizer } from "@angular/platform-browser";
import { BaseCardFunctions } from "app/shared-classes/base.card.fuctions";

@Component({
  selector: "app-report-issue",
  templateUrl: "./report.issue.component.html"
})
export class ReportIssueComponent extends BaseCardFunctions {
  private comments = "";
  private cardStatusSelection: cardReportStatus;
  private selections = statusArray;

  constructor(dataRepository: DataRepository, private sanitizer: DomSanitizer) {
    super(dataRepository);
  }

  public handleReportClick() {
    this.dataRepository.reportIssue(this.createReport()).then(data => {
      this.toast();
    })
    .catch(error => this.toast("An error has occured"));
  }

  public statusSelect(event: cardReportStatus) {
    this.cardStatusSelection = event;
  }

  get disableSubmit(): boolean {
    return this.currentCard == null || this.cardStatusSelection == null;
  }

  get currentCardSelected(): ICard {
    const returnCard = this.currentCardHolder.cards.filter(item => item.cardId === this.currentCard)[0];

    return returnCard || {} as ICard;
  }

  private createReport(): ICardReport {
    return {
      cardId: this.currentCardSelected.cardId,
      cardStatus: this.cardStatusSelection,
      comment: this.sanitizer.sanitize(0, this.comments || ""),
    };
  }
}
