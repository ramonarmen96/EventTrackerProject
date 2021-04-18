import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationCancel } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
// import { LoginComponent } from './components/login/login.component';
// import { LogoutComponent } from './components/logout/logout.component';
// import { RegisterComponent } from './components/register/register.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    GameListComponent,
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    // RegisterComponent,
    // LogoutComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
