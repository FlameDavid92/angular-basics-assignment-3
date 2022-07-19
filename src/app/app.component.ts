import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
    .small-btn {
      width: 20em;
    }
  `,
  ],
})
export class AppComponent {
  clickCounter = 0;
  clickLogs: string[] = [];

  isHidden() {
    return this.clickCounter % 2 === 0;
  }

  toggleDetails() {
    this.clickCounter++;
    this.clickLogs.push(
      this.clickCounter +
        '. ' +
        new Date().toLocaleString('en-GB') +
        (this.isHidden() ? ' secret not shown' : ' secret shown')
    );
  }
}
