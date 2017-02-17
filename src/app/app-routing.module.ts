import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { DailyDocketComponent }      from './daily-docket.component';
import { PrisonerDetailComponent }  from './prisoner-detail.component';
import {PhonesComponent} from './phones.component';
import {CanteenComponent} from './canteen.component';
import {AllowableItemsComponent} from './allowable-items.component';
import {PrisonerService} from './prisoner.service';

const routes: Routes = [
   {
    path: 'daily-docket',
    component: DailyDocketComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
    path: 'phones',
    component: PhonesComponent
  },
{
    path: 'canteen',
    component: CanteenComponent
},
{
    path: 'allowable-items',
    component: AllowableItemsComponent
  },

  {
  path: 'detail/:id',
  component: PrisonerDetailComponent
}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
