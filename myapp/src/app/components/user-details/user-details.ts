import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-details',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    DialogModule
  ],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {

  @Input() selectedUser?: User;
  @Output() cancelClicked = new EventEmitter<void>();
  @Input() visible!:boolean;


  onCancelButtonClicked() {
    this.cancelClicked.emit();
  }

  get firstLettersOfUsername() {
    const name = this.selectedUser?.name ?? '';  
    if (!name) {
      return '';
    }
    let res = '';
    if (!/\s/.test(name)) {
      return name.charAt(0);
    }
    const allPartsOfName = name.split(' ');
    for (let i = 0; i < allPartsOfName.length; i++) {
      res += allPartsOfName[i].charAt(0);
    }
    return res;
  }

}





