import { LoadingService } from '../../services/loading-service';
import { UserService } from '../../services/user-service';
import { Component, computed, Signal, signal, SimpleChanges } from '@angular/core';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-table',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule
  ],
  templateUrl: './article-table.html',
  styleUrl: './article-table.css',
})
export class UserTable {
  utenti = signal<User[]>([]);
  utentiOriginali = signal<User[]>([]);
  loadingValue!: Observable<boolean>;
  username = signal('');

  constructor(private userService: UserService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingValue = this.loadingService.isLoadingObs$;
  }

  click() {
    this.loadingService.updateIsLoadingValue(true);
    this.getUsers();
  }


  onSearch() {
    this.utenti.set(this.filterUsers());
    this.username.set('');
  }

  private getUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.utentiOriginali.set(users);
        this.utenti.set(users);
        this.loadingService.updateIsLoadingValue(false);
      },
      error: (err) => {
        this.loadingService.updateIsLoadingValue(false);
      }
    });
  }

  private filterUsers() {
    return this.utentiOriginali().filter(utente => utente.username === this.username());
  }












}


