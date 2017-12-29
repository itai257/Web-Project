import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PmCalendarComponent } from './pm-calendar/pm-calendar.component';
import { PmRegisterComponent } from './pm-register/pm-register.component';
import { PmLoginComponent } from './pm-login/pm-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksPageComponent,
    TopBarComponent,
    PmCalendarComponent,
    PmRegisterComponent,
    PmLoginComponent
  ],
  imports: [
    BrowserModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
