import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserTable } from './features/users/components/article-table/user-table';

export const routes: Routes = [
    {path: 'users' , component: UserTable}
];
