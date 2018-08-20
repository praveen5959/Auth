import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { RouterModule, Routes, Router } from "@angular/router";

import { UserService } from "./user.service";
import { NewsService } from "./news.service";

import { AuthguardGuard } from "./authguard.guard";

const appRoutes: Routes = [
  {
    path: "",
    component: LoginFormComponent
  },
  {
    path: "dashboard",
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, HttpModule],
  providers: [UserService, AuthguardGuard, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
