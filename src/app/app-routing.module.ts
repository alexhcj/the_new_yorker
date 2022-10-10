import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./modules/subscribe/subscribe.module').then(m => m.SubscribeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
