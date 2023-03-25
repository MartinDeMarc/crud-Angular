import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
