import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model: object = { //"model" is potato.
    first_name: "Bob",
    last_name: "Smith"
  }

  onSubmit() { //function to submit the data once the button is clicked.
    console.log(this.model) //.value gets us the value of the form field. Data is potato.
  }

}
