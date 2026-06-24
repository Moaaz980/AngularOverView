import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Globalthemeservice {
    theme = signal<string>('');

    updateTheme(newTheme: string) {
        this.theme.set(newTheme);
        return this.theme();
    }

}
