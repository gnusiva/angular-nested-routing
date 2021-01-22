import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'html', loadChildren: () => import('./modules/html/html.module').then( m => m.HtmlModule )},
  { path: 'css', loadChildren: () => import('./modules/css/css.module').then( m => m.CssModule )},
  { path: 'javascript', loadChildren: () => import('./modules/javascript/javascript.module').then( m => m.JavascriptModule )},
  { path: 'angular', loadChildren: () => import('./modules/angular/angular.module').then( m => m.AngularModule )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
