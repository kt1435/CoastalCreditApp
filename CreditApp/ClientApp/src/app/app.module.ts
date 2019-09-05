import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { ReportIssueComponent } from "./card-actions/report.issue.component";
import { EnableCardComponent } from "./card-actions/enable.card.component";
import { WebService } from "./data-repository/services/web.service";

import { OnsenModule } from "ngx-onsenui";
import { DataRepository } from "./data-repository/data.repository";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ReportIssueComponent,
    EnableCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    OnsenModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "reportIssue", component: ReportIssueComponent },
      { path: "enableCard", component: EnableCardComponent },
    ])
  ],
  providers: [WebService, DataRepository],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
