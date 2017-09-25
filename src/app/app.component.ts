import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onSubmit(data: NgForm) {
    console.log(data.value) //.value gets us the value of the form field. Data is potato.
  }
}
