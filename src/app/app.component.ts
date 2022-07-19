import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
    .my-btn {
      width: 20em;
    }
  `,
  ],
})
export class AppComponent {
  showPass = false;
  clickCounter = 0;
  clickLogs: string[] = [];

  toggleShowPass() {
    this.showPass = !this.showPass;
    this.clickCounter++;
    this.clickLogs.push(
      this.clickCounter +
        '. ' +
        new Date().toLocaleString('en-GB') +
        (this.showPass ? ' secret shown' : ' secret not shown')
    );
  }
}
