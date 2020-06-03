import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   isActive = {
      gold: true, silver: true, copper: true
   };

   constructor() { }

   activateAll() {
      if (this.isActive.gold && this.isActive.silver && this.isActive.copper) {
         this.isActive = { gold: false, silver: false, copper: false };
      }
      if (!this.isActive.gold && !this.isActive.silver && !this.isActive.copper) {
         this.isActive = { gold: true, silver: true, copper: true };
      }
   }

   ngOnInit() { }

}
