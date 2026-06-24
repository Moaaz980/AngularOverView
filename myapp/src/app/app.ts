import { Component, EventEmitter, inject, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Themeicon } from './core/components/themeicon/themeicon';
import { Globalthemeservice } from './core/services/GlobalThemeService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Themeicon , CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');

  globalThemeService!: Globalthemeservice;

  constructor(gts:Globalthemeservice) {
    this.globalThemeService = gts;
  }




  

}
