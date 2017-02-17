import { Component } from '@angular/core';
import {DailyDocketComponent} from './daily-docket.component';
import {DashboardComponent} from './dashboard.component';
@Component({
  selector: 'my-app',
  template: `
    <h1><a routerLink="/dashboard">{{title}}</a></h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'iCarcerate';
}
