import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  missionName = "LaunchCode Moonshot"

  candidates = [
    { name: 'Rusty Rutabaga', data: { age: 5, mass: '0.75 kg', sidekick: 'Blake' }, image: 'assets/images/Blake.png' },
    { name: 'Tessa Tortoise', data: { age: 126, mass: '113 kg', sidekick: 'Sally' }, image: 'assets/images/Sally.png' },
    { name: 'Bernie Beagle', data: { age: 4, mass: '15 kg', sidekick: 'Paul' }, image: 'assets/images/Paul.png' },
    { name: 'Jackalope', data: { age: 45, mass: '33 kg', sidekick: 'Chris' }, image: 'assets/images/Chris.png' },
    { name: 'Champ', data: { age: 9, mass: '36 kg', sidekick: 'Carly' }, image: 'assets/images/Carly.png' }
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }

  checkCrew(selectedCandidate): boolean {
    for (let i = 0, len = this.crew.length; i < len; i++) {
      if (this.crew[i].name === selectedCandidate.name) {
        return false;
      }
    }
    return true;
  }

  addToCrew(selectedCandidate) {
    this.crew.push(selectedCandidate);
  }

  changeMissionName(newName) {
    this.missionName = newName;
  }


}
