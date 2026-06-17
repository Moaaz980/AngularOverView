import { LoadingService } from '../../services/loading-service';
import { UserService } from '../../services/user-service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-article-table',
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './article-table.html',
  styleUrl: './article-table.css',
})
export class UserTable {
  utenti: User[] = [];
  loadingValue!: Observable<boolean>;

  constructor(private userService: UserService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingValue = this.loadingService.isLoadingObs$;
  }

  click() {
    this.loadingService.updateIsLoadingValue(true);
    this.getUsers();
  }

  private getUsers(): void {

    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.utenti = users;
        this.loadingService.updateIsLoadingValue(false);
      },
      error: (err) => {
        this.loadingService.updateIsLoadingValue(false);
      }
    });

  }






}


