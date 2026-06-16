import { App } from './../../app';
import { UserService } from './../../services/user-service';
import { Component } from '@angular/core';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-table',
  imports: [CommonModule],
  templateUrl: './article-table.html',
  styleUrl: './article-table.css',
})
export class ArticleTable {
  utenti: User[]= [];

  constructor(private userService: UserService) {}

  onClick() {
    this.getUsers();
  }


  // metodo helper per ricevere la risposta dal server e aggiornare lo stato del componente 
  private getUsers() :void  {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.utenti = users; 
      } , 
    });
  }



}


