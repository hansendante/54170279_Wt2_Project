import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CardComponent } from "./card/card.component";
import { ShellComponent } from "./shell/shell.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { Page404Component } from "./page404/page404.component";
import { MatButtonModule} from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ShellComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    Page404Component,
    PokemonDetailComponent
  ],
  imports: [BrowserModule, MatToolbarModule , MatIconModule, MatMenuModule,
  AppRoutingModule, MatCardModule ,BrowserAnimationsModule, MatButtonModule, MatExpansionModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
