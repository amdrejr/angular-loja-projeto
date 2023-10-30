import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDestaqueComponent } from './produto-destaque.component';

const routes: Routes = [
  {path:'', component: ProdutoDestaqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoDestaqueRoutingModule { }
