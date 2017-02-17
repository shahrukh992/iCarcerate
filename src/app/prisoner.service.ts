import {Injectable} from '@angular/core'
import {Prisoner} from './prisoner'
import {PRISONERS} from './mock-prisoners'

export class PrisonerService{
    getPrisoners(): Promise<Prisoner[]>{
        return Promise.resolve(PRISONERS);
    }

    getPrisoner(id: number): Promise<Prisoner> {
  return this.getPrisoners()
             .then(prisoners => prisoners.find(prisoner => prisoner.id === id));
}

}
