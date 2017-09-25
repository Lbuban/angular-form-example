import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model: object = { //this "model" object is potato. We're not connected to an API right now, so we're hardcoding it in - but if we have an API, we'll need to call the service. 
    first_name: "Bob",
    last_name: "Smith"
  }

  onSubmit(data: NgForm) { //function to submit the data once the button is clicked.
    console.log(data.value) //.value gets us the value of the form field. The variable "data" is potato.
    console.log(this.model)
  }

}
