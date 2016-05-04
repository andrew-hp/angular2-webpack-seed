import { Component } from '@angular/core';


@Component({
  selector: 'home',
  template: `
    <h2>Home</h2>
    <h3>{{greeting}}</h3>
  `
})

export class Home {
  greeting: string = 'Hello world!';
}
