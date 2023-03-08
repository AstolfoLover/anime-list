import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { SelectedUpperPipe } from './pipes/selected-upper.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainPageComponent,
    CardMainComponent,
    CustomDatePipe,
    AnimeCardComponent,
    AnimeFormComponent,
    AnimeDetailComponent,
    SelectedUpperPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
