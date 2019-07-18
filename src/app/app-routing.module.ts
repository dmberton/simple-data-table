import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { TableScrollComponent } from './table-scroll/table-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: TablePagingComponent,
  },
  {
    path: 'table-scroll',
    component: TableScrollComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
