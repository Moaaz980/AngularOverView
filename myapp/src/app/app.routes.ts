import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ArticleTable } from './components/article-table/article-table';

export const routes: Routes = [
    {path: 'users' , component: ArticleTable}
];
