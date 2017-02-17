import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {PrisonerDetailComponent} from './prisoner-detail.component';
import {DailyDocketComponent} from './daily-docket.component';
import {DashboardComponent} from './dashboard.component';
import {PhonesComponent} from './phones.component';
import {CanteenComponent} from './canteen.component';
import {AllowableItemsComponent} from './allowable-items.component';
import {PrisonerService} from './prisoner.service';

import { RouterModule }   from '@angular/router';
import { Location }       from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  AppRoutingModule
                   ],
  declarations: [ AppComponent, 
                  PrisonerDetailComponent, 
                  DailyDocketComponent, 
                  DashboardComponent,
                  CanteenComponent, 
                  AllowableItemsComponent, 
                  PhonesComponent 
                  ],
  bootstrap:    [ AppComponent ],
  providers: [PrisonerService]
})
export class AppModule { }
