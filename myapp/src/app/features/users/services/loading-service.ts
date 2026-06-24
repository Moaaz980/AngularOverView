import { Injectable, Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor() {}
    
    private isLoading = new BehaviorSubject<boolean>(false);

    isLoadingObs$ = this.isLoading.asObservable();


    updateIsLoadingValue(newValue: boolean) {
        this.isLoading.next(newValue);
    }


}
