import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    httpClient: HttpClient = inject(HttpClient);
    
    getAllUsers() :Observable<User[]> {
        return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }


    

    
}
