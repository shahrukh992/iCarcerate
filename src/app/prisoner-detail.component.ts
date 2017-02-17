import {Prisoner} from './prisoner';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PrisonerService } from './prisoner.service';

@Component({
    moduleId: module.id,
    selector: 'my-prisoner-detail',
    templateUrl: './prisoner-detail.component.html',
    styles: [`.window{
    padding: 20px;
    margin: 20px 500px 20px 20px;
    background-color:  #EEE;
    float: left;
  }`]
})

export class PrisonerDetailComponent implements OnInit{
@Input()
prisoner: Prisoner;
constructor(
  private prisonerService: PrisonerService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.prisonerService.getPrisoner(+params['id']))
    .subscribe(prisoner => this.prisoner = prisoner);
}

goBack(): void {
  this.location.back();
}


}