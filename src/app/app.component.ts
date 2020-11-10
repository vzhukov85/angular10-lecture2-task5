import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = {'red': '#FF0000', 'orange': '#FF8000','yellow': '#FFFF00', 'green': '#00FF00',
          'blue': '#00FFFF', 'indigo': '#0000FF', 'purple': '#FF00FF'}

  visible = 'visible'

  onClick() {
    if (this.visible == 'visible') {
      this.visible = 'collapse'
    } else {
      this.visible = 'visible'
    }
  }
}
