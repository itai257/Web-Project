import { ListService } from './services/list.service';
import { GatewayConfig } from './app.config';
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
import {TooltipModule, CheckboxModule} from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TruncateModule } from 'ng2-truncate';
import { TasksBoxComponent } from './tasks-box/tasks-box.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from "./guards/auth.guard";
import {HttpModule} from "@angular/http";
import { TasksService } from './services/tasks.service';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TasksPageComponent,
    TopBarComponent,
    PmCalendarComponent,
    PmRegisterComponent,
    PmLoginComponent,
    ForgotPasswordComponent,
    TasksBoxComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AccordionModule,
    TooltipModule,
    CheckboxModule,
    TruncateModule,
    HttpModule,
    CalendarModule,
    BrowserAnimationsModule,
        RouterModule.forRoot([
          { path: '', component: TasksPageComponent, canActivate: [AuthGuard]},
          { path: 'login', component: PmLoginComponent },
          { path: 'register', component: PmRegisterComponent },
          { path: 'forgotpassword', component: ForgotPasswordComponent },
          { path: '**', redirectTo: '' }
    ])
  ],
  providers: [ GatewayConfig, AuthenticationService, AuthGuard,  ListService, TasksService, UserService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
