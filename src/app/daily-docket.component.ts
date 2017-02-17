import { Component, OnInit } from '@angular/core';
import {Prisoner} from './prisoner';
import {PrisonerService} from './prisoner.service';
import {Router} from '@angular/router';

//<ul class="prisoners"> 
  //  <li *ngFor="let prisoner of prisoners" [class.selected]="prisoner === selectedPrisoner"><span class="badge">{{prisoner.id}}</span> {{prisoner.name}}</li>
//</ul> 
@Component({
  moduleId: module.id,
  selector: 'my-daily-docket',
  templateUrl: './daily-docket.component.html',
    styleUrls: ['./daily-docket.component.css'],
    providers: [PrisonerService]

})
export class DailyDocketComponent {
  title = 'Daily Docket';
  prisoners: Prisoner[];
  selectedPrisoner: Prisoner;

  constructor(private prisonerService: PrisonerService,
              private router: Router,
              ){}

getPrisoners(){
  this.prisonerService.getPrisoners().then(prisoners => this.prisoners = prisoners)
}
  
  ngOnInit(): void{
    this.getPrisoners()
  }

  onSelect(prisoner: Prisoner): void {
  this.selectedPrisoner = prisoner;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedPrisoner.id]);
}

  }
  

