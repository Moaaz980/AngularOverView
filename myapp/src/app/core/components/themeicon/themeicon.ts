import { Component } from '@angular/core';
import { Globalthemeservice } from '../../services/GlobalThemeService';

@Component({
  selector: 'app-themeicon',
  imports: [],
  templateUrl: './themeicon.html',
  styleUrl: './themeicon.css',
})
export class Themeicon {

  toggled: boolean = false;

  constructor(private gts: Globalthemeservice) {}

  onClick() {
    this.toggled = !this.toggled;
    if (this.toggled) {
      this.gts.updateTheme('light');
    }
    else {
      this.gts.updateTheme('dark');
    }
  }

}




