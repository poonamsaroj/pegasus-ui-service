import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayout } from './components/main-layout/main-layout.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: "full"
  },
  {
    path: 'dashboard',
    component: LandingComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [MainLayout, PageNotFoundComponent] 