import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  message = "Space shuttle ready for takeoff!";
  log = '';
  bottom = 0;
  // split = background
  left = 225;
  altitude = 0;
  shadow = '2px 2px 3px black';

  launch(): void {
    if (this.color !== 'blue') {
      if (window.confirm("Confirm shuttle is ready for lift off?")) {
        this.message = "Shuttle in Flight.";
        this.color = 'blue';
        this.altitude = 1;
        this.bottom = 5;
      }
    }
    else {
      window.alert("Shuttle is already in flight.\nShuttle must land before another lift off.")
    }
  }

  land(): void {
    if (this.color === 'blue') {
      window.alert("Shuttle is landing.\nLanding gear engaged.");
      this.color = 'green';
      this.altitude = 0;
      this.bottom = 0;
      this.left = 225;
    }
    else {
      window.alert("Shuttle is not in flight.\nShuttle must lift off before it can land.");
    }
  }

  abort(): void {
    if (this.color === 'green' && window.confirm("Abort Mission?\nAre You Sure?")) {
      this.message = "Mission Aborted!";
      this.color = 'red';
    }
    else {
      window.alert("Cannot abort mission while in flight.\nShuttle must land before mission can abort.");
    }
  }

  move(direction: string): void {
    if (this.color === 'blue') {
      direction === 'up' ?
        this.bottom += 10 :
        direction === 'down' ?
          this.bottom -= 10 :
          direction === 'left' ?
            this.left -= 10 :
            direction === 'right' ?
              this.left += 10 :
              null;
    }
    else {
      window.alert("The shuttle is not in flight.\nShuttle must be launched first.");
    }
  }

  fly(direction: string): void {
    if (this.color === 'blue') {

      if (direction === 'asc') {
        this.altitude++;
        this.shadow = `2px ${this.altitude}px ${this.altitude}px black`;
      }
      else if (this.altitude > 1) {
        this.altitude--;
        this.shadow = `2px ${this.altitude}px ${this.altitude}px black`;
      }
      else {
        window.alert("The shuttle is too close to the ground to decend.");
      }

    }
    else {
      window.alert("The shuttle is not in flight.\nShuttle must be launched first.");
    }
  }

}
