import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppshellComponent } from './common/appshell/appshell.component';
import { MAIN_ROUTES } from './routes/main-routes';

const routes: Routes = [ 
  {
    path: '',
    component: AppshellComponent,
    children: MAIN_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
