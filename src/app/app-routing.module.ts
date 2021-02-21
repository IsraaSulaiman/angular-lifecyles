import { AppChildComponent } from './app-child/app-child.component';
import { OthersComponent } from './others/others.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'others',
    component: OthersComponent,
  },
  {
    path: '',
    component: AppChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
