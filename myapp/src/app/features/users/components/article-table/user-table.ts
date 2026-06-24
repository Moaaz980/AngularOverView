import { LoadingService } from '../../services/loading-service';
import { UserService } from '../../services/user-service';
import { Component, signal } from '@angular/core';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Observable, timer } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { UserDetails } from '../user-details/user-details';
import { SearchUser } from '../search-user/search-user';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-article-table',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    DialogModule,
    UserDetails,
    SearchUser , 
    MessageModule
  ],
  templateUrl: './article-table.html',
  styleUrl: './article-table.css',
})
export class UserTable {
  utenti = signal<User[]>([]);
  utentiOriginali = signal<User[]>([]);
  loadingValue!: Observable<boolean>;
  username = signal('');
  utenteSelezionato?: User;
  vis!: boolean;
  errorMessage = signal<string>('');
  notFound: boolean = false;


  constructor(private userService: UserService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingValue = this.loadingService.isLoadingObs$;
  }

  click() {
    this.loadingService.updateIsLoadingValue(true);
    this.getUsers();
  }


  onSearch(name: string) {
    const user = this.findUserByUsername(name)!;
    if (!this.utentiOriginali().includes(user)) {      
      this.notFound = true;
      this.errorMessage.set('Utente non trovato');
      this.setTimerForError();
      this.username.set('');
    }
    this.username.set(name);
    this.utenti.set(this.filterdUsers(name));
    this.username.set('');
  }

  handleUserViewDetails(usr: User) {
    this.vis = true;
    this.utenteSelezionato = usr;
  }

  closeModal() {
    this.vis = false;
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

  private filterdUsers(name: string) {
    return this.utentiOriginali().filter(utente => utente.username === name);
  }

  private findUserByUsername(username: string) {
    return this.utentiOriginali().find(utente => utente.username === username);
  }

  private setTimerForError() {
    timer(1500).subscribe(() => {
      this.errorMessage.set('');
      this.notFound = false;
    })
  }

   get errorMessageVal() {
    return this.errorMessage();
  }

}


