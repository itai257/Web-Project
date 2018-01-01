import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PmCalendarComponent } from './pm-calendar/pm-calendar.component';
import { PmRegisterComponent } from './pm-register/pm-register.component';
import { PmLoginComponent } from './pm-login/pm-login.component';
import {TooltipModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    TasksPageComponent,
    TopBarComponent,
    PmCalendarComponent,
    PmRegisterComponent,
    PmLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
