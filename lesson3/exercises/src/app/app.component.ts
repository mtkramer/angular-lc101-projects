import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  inFlight = false;

  launch(): void {
    if (this.color !== 'blue') {
      if (window.confirm("Confirm shuttle is ready for lift off?")) {
        this.message = "Shuttle in Flight.";
        this.color = 'blue';
        this.height = 10000;
      }
    }
    else {
      window.alert("Shuttle is already in flight.\nShuttle must land before another lift off.")
    }
  }

}
