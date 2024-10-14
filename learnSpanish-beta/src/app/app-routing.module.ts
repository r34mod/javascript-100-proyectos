import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaticPageComponent } from './components/StaticPage/StaticPage.component';
import { BookComponent } from './components/book/book.component';

export const routes: Routes = [

  { path: 'book', component: BookComponent},
  { path: 'chat', component: StaticPageComponent },
];


/**
 * AppRoutingModule
 * Designed to be the root routing module.
 *
 * imports:
 *  - RouterModule. Adds router directives and providers.
 *
 * exports:
 *  - RouterModule. The module with the configured routes.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }