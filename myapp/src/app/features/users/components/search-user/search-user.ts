import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-user',
  imports: [  
    CommonModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
  ],
  templateUrl: './search-user.html',
  styleUrl: './search-user.css',
})
export class SearchUser {

  @Input() username = '';
  @Output() usernameChange = new EventEmitter<string>();
  @Output() searchClicked = new EventEmitter<string>();


  onClickSearch() {
    this.searchClicked.emit(this.username);
  }

  onUsernameChange(value: string) {
    this.username = value;
    this.usernameChange.emit(value);
  }

}
